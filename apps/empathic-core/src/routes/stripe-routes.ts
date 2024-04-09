import { Express, Request, Response } from 'express';
import { createSubscription } from '../services/subscriptions';

export const setUpStripeRoutes = (app: Express) => {
  app.post('/subscribe', async (req: Request, res: Response) => {
    const { customerId, priceId } = req.body;

    try {
      const subscription = await createSubscription(customerId, priceId);
      res.status(200).json({ success: true, subscription });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
};
