import { createSlice } from '@reduxjs/toolkit';

const stripeSlice = createSlice({
  name: 'stripe',
  initialState: {
    client_secret: '',
    customer: null,
    elementKey: 0,
  },
  reducers: {
    incrementElementKey: (state, action) => {
      state.elementKey = state.elementKey + 1;
    },
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
