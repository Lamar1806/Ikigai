import { Express } from 'express';
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../models/stripe-products';

export const setUpStripeProductRoutes = (app: Express) => {
  // Create a new product
  app.post('/products', async (req, res) => {
    try {
      const { name, description } = req.body;
      const product = await createProduct({ name, description });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Retrieve a specific product by its ID
  app.get('/products/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
      const product = await getProduct(productId);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update a specific product by its ID
  app.put('/products/:productId', async (req, res) => {
    try {
      const { productId } = req.params;
      const { newName, newDescription } = req.body;
      const updatedProduct = await updateProduct({
        productId,
        newName,
        newDescription,
      });
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete a specific product by its ID
  app.delete('/products/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
      const deletedProduct = await deleteProduct(productId);
      res.status(204).json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};
