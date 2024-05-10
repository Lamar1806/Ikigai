import { Express } from 'express';
import {
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} from '../models/stripe-customer';

export const setUpStripeSubscriptionProducts = (app: Express) => {
  // Create a new customer
  app.post('/customers', async (req, res) => {
    try {
      const { email, name } = req.body;
      const customer = await createCustomer(email, name);
      res.status(201).json(customer);
    } catch (error) {
      console.error('Failed to create customer:', error);
      res.status(500).json({ error: 'Failed to create customer' });
    }
  });

  // Retrieve a specific customer by their ID
  app.get('/customers/:customerId', async (req, res) => {
    try {
      const customerId = req.params.customerId;
      const customer = await getCustomer(customerId);
      if (customer) {
        res.status(200).json(customer);
      } else {
        res.status(404).json({ error: 'Customer not found' });
      }
    } catch (error) {
      console.error('Failed to retrieve customer:', error);
      res.status(500).json({ error: 'Failed to retrieve customer' });
    }
  });

  // Update a specific customer
  app.put('/customers/:customerId', async (req, res) => {
    try {
      const customerId = req.params.customerId;
      const updates = req.body;
      const customer = await updateCustomer(customerId, updates);
      if (customer) {
        res.status(200).json(customer);
      } else {
        res.status(404).json({ error: 'Customer not found' });
      }
    } catch (error) {
      console.error('Failed to update customer:', error);
      res.status(500).json({ error: 'Failed to update customer' });
    }
  });

  // Delete a specific customer
  app.delete('/customers/:customerId', async (req, res) => {
    try {
      const customerId = req.params.customerId;
      const deletedCustomer = await deleteCustomer(customerId);
      if (deletedCustomer) {
        res.status(204).json(deletedCustomer);
      } else {
        res.status(404).json({ error: 'Customer not found' });
      }
    } catch (error) {
      console.error('Failed to delete customer:', error);
      res.status(500).json({ error: 'Failed to delete customer' });
    }
  });
};
