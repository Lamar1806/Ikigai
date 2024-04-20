import express from 'express';
import * as path from 'path';
import { setUpFireBaseRoutes } from './routes/firebase-routes';
import { setUpStripeRoutes } from './routes/stripe-routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import setupGoogleRoutes from './routes/google-auth-routes';
import session from 'express-session';
import passport from 'passport';
import setupAuthStrategies from './auth';

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(
  session({
    secret: 'secret', // Change this to a random secret in production
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware
app.use(cors(corsOptions)); // Apply CORS middleware with options
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Initialize all authentication strategies
setupAuthStrategies(passport);

//routes
setUpFireBaseRoutes(app);
setUpStripeRoutes(app);
setupGoogleRoutes(app);

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
