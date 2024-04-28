import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const StyledPaymentForm = styled.form`
  padding: 16px;
  width: 100vw;
  max-width: 600px;
`;

export function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  if (!stripe || !elements) {
    // Renders this content as long as Stripe context is loading
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });
    // @ts-ignore
    if (error) setMessage(error.message);

    setIsProcessing(false);
  };

  return (
    <StyledPaymentForm onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={isProcessing} id="submit">
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
      <p>{message}</p>
    </StyledPaymentForm>
  );
}

export default PaymentForm;
