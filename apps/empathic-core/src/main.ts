import express from 'express';
import * as path from 'path';
import { setUpFireBaseRoutes } from './routes/firebase-routes';
import { setUpStripeRoutes } from './routes/stripe-routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS middleware with options
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());

//routes
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
