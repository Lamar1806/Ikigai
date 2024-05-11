import { stripe } from '../config/stripe-config';

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
