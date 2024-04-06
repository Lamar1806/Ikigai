import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { GlobalStyles } from './theme/global-styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// @ts-ignore
import app from './firebaseConfig';
import App from './app/app';

const stripePromise = loadStripe(
  `${process.env.REACT_APP_STRIPE_TEST_publishableKey}`
);

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
