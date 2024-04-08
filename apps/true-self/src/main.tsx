import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { GlobalStyles } from './theme/global-styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// @ts-ignore
import app from './firebaseConfig';
import App from './app/app';
// import dotenv from 'dotenv';
// dotenv.config({ path: './.' });
const publishableKey = process.env.NX_STRIPE_TEST_PUBLISHABLE_KEY;
const secretKey = process.env.NX_STRIPE_TEST_SECRET_KEY;

const stripePromise = loadStripe(`${publishableKey}`);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Elements stripe={stripePromise}>
      <GlobalStyles />
      <App />
    </Elements>
  </StrictMode>
);
