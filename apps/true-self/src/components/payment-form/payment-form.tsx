import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { setClientSecret } from '../../redux/stripeSlice';

const StyledPaymentForm = styled.form`
  padding: 16px;
  width: 100vw;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px; // Adds space between form elements
`;

const cardStyle = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const SubmitButton = styled.button`
  padding: 8px;
  background: transparent;
  margin-top: 16px;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

interface Props {
  amount: number;
}

export function PaymentForm({ amount }: Props) {
  //@ts-ignore
  const clientSecret = useSelector((state) => state.stripe.client_secret);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(
          `${process.env.NX_SERVER_URL}/create-payment-intent`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
          }
        );
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);
        dispatch(setClientSecret({ client_secret: data.clientSecret }));
      } catch (error: any) {
        setMessage(`Failed to initialize payment: ${error.message}`);
      }
    };

    fetchClientSecret();
  }, [dispatch, amount]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMessage('Stripe has not fully loaded yet.');
      return;
    }

    setIsProcessing(true);
    const cardElement = elements.getElement(CardNumberElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement!,
          billing_details: {
            name: 'Customer Name', // You should get this dynamically
          },
        },
      }
    );

    if (error) {
      setMessage(error.message || 'An error occurred');
      setIsProcessing(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setMessage('Payment successful!');
      setIsProcessing(false);
    }
  };

  return (
    <StyledPaymentForm onSubmit={handleSubmit}>
      <CardNumberElement options={cardStyle} />
      <CardExpiryElement options={cardStyle} />
      <CardCvcElement options={cardStyle} />
      <SubmitButton disabled={isProcessing} id="submit">
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </SubmitButton>
      <p>{message}</p>
    </StyledPaymentForm>
  );
}

export default PaymentForm;
