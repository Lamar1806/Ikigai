import Stripe from 'stripe';

const stripe = new Stripe('your_stripe_secrete_key', {
  apiVersion: '2023-10-16',
});

export const createSubscription = async (
  customerId: string,
  priceId: string
) => {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });
    return subscription;
  } catch (error) {
    console.error('Error creating subscription', error);
    throw error;
  }
};
