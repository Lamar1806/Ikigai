import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './theme/global-styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './app/app';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { checkAuthStatus } from './redux/authSlice';

const queryClient = new QueryClient();
const publishableKey = process.env.NX_STRIPE_TEST_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey as string);
const root = ReactDOM.createRoot(document.getElementById('root') as Element);

const AppWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <GlobalStyles />
      <App />
    </Elements>
  );
};

// Dispatch checkAuthStatus to initialize user session from localStorage
store.dispatch(checkAuthStatus());

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppWrapper />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
