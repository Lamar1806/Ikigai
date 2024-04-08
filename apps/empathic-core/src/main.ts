import express, { Request, Response } from 'express';
import * as path from 'path';

import { createSubscription } from './subscriptions';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to EmpathicCore!' });
});

app.get('/', (req, res) => {
  res.send('Hello world');
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

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
