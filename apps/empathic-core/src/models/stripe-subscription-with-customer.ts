import { getCustomer } from './stripe-customer';
import { stripe } from '../config/stripe-config';

export const createProductAndPrice = async () => {
  const product = await stripe.products.create({
    name: 'Pro Plan', // Name of the product
    description: 'Advanced subscription plan with additional features',
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 2000, // Price in cents
    currency: 'usd',
    recurring: { interval: 'month' }, // Define the billing cycle
  });

  return { product, price };
};

export const createSubscription = async (customerId, priceId) => {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    expand: ['latest_invoice.payment_intent'], // Optionally expand details
    payment_behavior: 'default_incomplete',
    payment_settings: { save_default_payment_method: 'on_subscription' },
  });

  return subscription;
};

export const setupSubscription = async (customerId) => {
  const { price } = await createProductAndPrice();
  const customer = await getCustomer(customerId);
  const subscription = await createSubscription(customer.id, price.id);

  return subscription;
};

// setupSubscription()
//     .then(subscription => console.log(subscription))
//     .catch(error => console.error(error));
