import { Express } from 'express';

import {
  createSubscriptionProduct,
  deleteSubscriptionProduct,
  getSubscriptionProduct,
  updateSubscriptionProduct,
} from '../models/stripe-subscription-products';

export const setUpStripeSubscriptionProductRoutes = (app: Express) => {
  // Create a new subscription product
  app.post('/subscription-products/create', async (req, res) => {
    try {
      const { productName, description, amount, currency, interval } = req.body;
      const result = await createSubscriptionProduct({
        productName,
        description,
        amount,
        currency,
        interval,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Retrieve a subscription product and its prices
  app.get('/subscription-products/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
      const result = await getSubscriptionProduct(productId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update a subscription product
  app.patch('/subscription-products/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
      const updates = req.body;
      const result = await updateSubscriptionProduct(productId, updates);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete a subscription product
  app.delete('/subscription-products/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
      const result = await deleteSubscriptionProduct(productId);
      res.status(204).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};
