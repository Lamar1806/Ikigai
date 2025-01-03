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
  origin: 'http://localhost:4200', // Ensure this matches your React app's URL
  credentials: true, // This is important: it allows cookies to be sent with requests
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(
  session({
    secret: 'secret', // Change this in production
    resave: false,
    saveUninitialized: false, // Change this if you don't want to store sessions until something is modified
    cookie: {
      httpOnly: true, // Recommended: limits access to cookies
      secure: false, // Set to true if you are using https
      sameSite: 'none', // Set to 'none' if your React app and Express server are served from different origins
    },
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
