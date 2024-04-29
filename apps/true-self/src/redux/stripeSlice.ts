import { createSlice } from '@reduxjs/toolkit';

const stripeSlice = createSlice({
  name: 'stripe',
  initialState: {
    client_secret: '',
    customer: null,
  },
  reducers: {
    setClientSecret: (state, action) => {
      state.client_secret = action.payload.client_secret;
    },
    setStripeCustomer: (state, action) => {
      state.customer = action.payload.customer;
    },
  },
});

export const { setClientSecret, setStripeCustomer } = stripeSlice.actions;

export default stripeSlice.reducer;
