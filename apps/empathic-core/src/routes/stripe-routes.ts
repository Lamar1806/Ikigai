import { Express, Request, Response } from 'express';
import { createSubscription } from '../services/subscriptions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NX_STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export const setUpStripeRoutes = (app: Express) => {
  app.get('/config-stripe', async (req: Request, res: Response) => {
    res.send({ publishableKey: process.env.NX_STRIPE_TEST_PUBLISHABLE_KEY });
  });

  app.post('/subscribe', async (req: Request, res: Response) => {
    const { customerId, priceId } = req.body;

    try {
      const subscription = await createSubscription(customerId, priceId);
      res.status(200).json({ success: true, subscription });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  app.post('/create-payment-intent', async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099, // amount in cents
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
};
