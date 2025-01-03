import { Express, Request, Response } from 'express';
import { createSubscription } from '../services/subscriptions';
import Stripe from 'stripe';
import { getUserIdByEmail, updateUser } from '../models/true-self-user';
import { setUpStripeSubscriptionProductRoutes } from './stripe-sub-product-routes';
import { setUpStripeCustomerRoutes } from './stripe-customer-routes';
import { setUpStripeProductRoutes } from './stripe-product-routes';
import { stripe } from '../config/stripe-config';

export const setUpStripeRoutes = (app: Express) => {
  // Publishable Key
  app.get('/config-stripe', async (req: Request, res: Response) => {
    res.send({ publishableKey: process.env.NX_STRIPE_TEST_PUBLISHABLE_KEY });
  });

  // Subscribe
  app.post('/subscribe', async (req: Request, res: Response) => {
    const { customerId, priceId } = req.body;

    try {
      const subscription = await createSubscription(customerId, priceId);
      res.status(200).json({ success: true, subscription });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  // Payment Intenet
  app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount, // amount in cents
        currency: 'usd',
        // additional settings can be added here such as receipt_email, etc.
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(400).send({
        error: {
          message: error.message,
        },
      });
    }
  });

  // Create Subscription
  app.post('/create-subscription', async (req, res) => {
    const { customerId, priceId } = req.body;

    try {
      // Ensure the customer has a payment method attached or create a new SetupIntent
      const setupIntent = await stripe.setupIntents.create({
        customer: customerId,
        usage: 'off_session', // Indicate that the payment method will be used later
      });

      // Create the subscription
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        expand: ['latest_invoice.payment_intent'], // To get the client secret
      });

      const clientSecret =
        //@ts-ignore
        subscription.latest_invoice.payment_intent.client_secret;

      res.send({
        clientSecret: clientSecret,
        subscriptionId: subscription.id,
      });
    } catch (error) {
      res.status(400).send({
        error: {
          message: error.message,
        },
      });
    }
  });

  // Create Customer
  app.post('/create-customer', async (req, res) => {
    const { name, email } = req.body; // Extract name and email from the request body

    try {
      const customer = await stripe.customers.create({
        name: name,
        email: email,
        // You can also add other fields like address, phone, etc.
      });
      const userId = await getUserIdByEmail(email);

      updateUser(userId, { stripe_customer_ref_id: customer.id });

      // Customer has been created, and you can now return the customer ID
      res.status(201).send({
        message: 'Customer created successfully',
        customerId: customer, // This is the Stripe Customer ID
      });
    } catch (error) {
      console.error('Error creating customer:', error);
      res.status(400).send({
        message: 'Failed to create customer',
        error: error.message,
      });
    }
  });
  setUpStripeCustomerRoutes(app);
  setUpStripeSubscriptionProductRoutes(app);
  setUpStripeProductRoutes(app);
};
