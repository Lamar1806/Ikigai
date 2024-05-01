import React, { StrictMode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './theme/global-styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './app/app';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { setClientSecret } from './redux/stripeSlice';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
    body: JSON.stringify({ amount: 1099 }),
  });

  const data = await response.json();
  if (response.ok) {
    return data.clientSecret;
  } else {
    throw new Error(data.error.message);
  }
};

const AppWrapper = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState({});
  // @ts-ignore
  const clientSecret = useSelector((state) => state.stripe.client_secret);

  useEffect(() => {
    const initializePaymentIntent = async () => {
      try {
        const client_secret = await fetchClientSecret();
        dispatch(setClientSecret({ client_secret }));
        console.log('AppWrapper - client_secret: ', client_secret);
      } catch (error) {
        console.error(error);
      }
    };

    initializePaymentIntent();
  }, []);

  useEffect(() => {
    // Update the Elements options when the clientSecret changes
    if (clientSecret) {
      setOptions({ clientSecret });
    }
  }, [clientSecret]);

  if (clientSecret) {
    return (
      <Elements stripe={stripePromise}>
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
      <QueryClientProvider client={queryClient}>
        <AppWrapper />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
