import React, { StrictMode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './theme/global-styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './app/app';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const publishableKey = process.env.NX_STRIPE_TEST_PUBLISHABLE_KEY;
//@ts-ignore
const stripePromise = loadStripe(publishableKey);
//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

const fetchPublishableKey = async () => {
  const response = await fetch('http://localhost:3333/config-stripe', {
    method: 'GET',
  });
  const data = await response.json();
  if (response.ok) {
    return data.publishableKey;
  } else {
    throw new Error(data.error.message);
  }
};

const fetchClientSecret = async () => {
  const response = await fetch('http://localhost:3333/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: 1099 }), // Example: 1099 cents = $10.99
  });

  const data = await response.json();
  if (response.ok) {
    return data.clientSecret;
  } else {
    throw new Error(data.error.message);
  }
};

const AppWrapper = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [publishableKey, setPublishableKey] = useState('');

  useEffect(() => {
    const initializePaymentIntent = async () => {
      try {
        const clientSecret = await fetchClientSecret();
        setClientSecret(clientSecret);
        console.log('clientSecret: ', clientSecret);
      } catch (error) {
        console.error(error);
      }
    };

    initializePaymentIntent();
  }, []);

  if (clientSecret) {
    return (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <GlobalStyles />
        <App />
      </Elements>
    );
  } else {
    <div>Loading</div>;
  }
};

root.render(
  <StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </StrictMode>
);
