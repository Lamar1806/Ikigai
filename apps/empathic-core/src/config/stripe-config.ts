import Stripe from 'stripe';

export const stripe = new Stripe(process.env.NX_STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2023-10-16',
});
