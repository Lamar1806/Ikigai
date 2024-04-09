import express from 'express';
import * as path from 'path';
import { setUpFireBaseRoutes } from './routes/firebase-routes';
import { setUpStripeRoutes } from './routes/stripe-routes';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

setUpFireBaseRoutes(app);
setUpStripeRoutes(app);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to EmpathicCore!' });
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
