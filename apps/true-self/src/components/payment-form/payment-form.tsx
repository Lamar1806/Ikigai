import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { setClientSecret } from '../../redux/stripeSlice';

const StyledPaymentForm = styled.form`
  padding: 16px;
  width: 100vw;
  max-width: 600px;
`;

interface Props {
  amount: number;
}

const updatePaymentIntent = async (newAmount: number) => {
  // Example POST request to your server endpoint to update or create a new payment intent
  const response = await fetch('http://localhost:3333/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: newAmount }),
  });
  const data = await response.json();
  return data.clientSecret;
};

export function PaymentForm(props: Props) {
  // @ts-ignore
  const oldClientSecret = useSelector((state) => state.stripe.client_secret);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const client_secret = await updatePaymentIntent(props.amount);
        dispatch(setClientSecret({ client_secret }));

        console.log('PaymentForm - client_secret: ', client_secret);
      } catch (error) {
        setMessage('Failed to initialize payment: ' + error);
      }
    };

    fetchClientSecret();
  }, [dispatch, props.amount]);

  if (!stripe || !elements) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error) {
      // @ts-ignore
      setMessage(error.message);
    } else {
      setMessage('Payment successful!');
    }

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
