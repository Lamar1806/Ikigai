import Stripe from 'stripe';
import { stripe } from '../config/stripe-config';

export const createCustomer = async (
  email: string,
  name: string
): Promise<Stripe.Customer> => {
  const customer = await stripe.customers.create({
    email: email,
    name: name,
    payment_method: 'pm_card_visa',
  });
  console.log('Customer created:', customer);
  return customer;
};

export const getCustomer = async (
  customerId: string
): Promise<Stripe.Customer | Stripe.DeletedCustomer | null> => {
  try {
    const customer = await stripe.customers.retrieve(customerId);
    console.log('Customer retrieved:', customer);
    return customer;
  } catch (error) {
    console.error('Error retrieving customer:', error);
    return null;
  }
};

export const updateCustomer = async (
  customerId: string,
  updates: Stripe.CustomerUpdateParams
): Promise<Stripe.Customer | null> => {
  try {
    const customer = await stripe.customers.update(customerId, updates);
    console.log('Customer updated:', customer);
    return customer;
  } catch (error) {
    console.error('Error updating customer:', error);
    return null;
  }
};

export const deleteCustomer = async (
  customerId: string
): Promise<Stripe.DeletedCustomer | null> => {
  try {
    const deleted = await stripe.customers.del(customerId);
    console.log('Customer deleted:', deleted);
    return deleted;
  } catch (error) {
    console.error('Error deleting customer:', error);
    return null;
  }
};
