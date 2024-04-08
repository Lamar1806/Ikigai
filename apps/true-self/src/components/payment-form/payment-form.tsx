import styled from '@emotion/styled';
import {
  CardElement,
  PaymentElement,
  IdealBankElement,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface PaymentFormProps {}

const StyledPaymentForm = styled.div`
  color: pink;
`;

export function PaymentForm(props: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend for processing
    console.log('Form submitted:', { cardNumber, expiry, cvc, name });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="1234 5678 9012 3456"
        required
      />

      <label htmlFor="expiry">Expiry Date</label>
      <input
        type="text"
        id="expiry"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        placeholder="MM/YY"
        required
      />

      <label htmlFor="cvc">CVC</label>
      <input
        type="text"
        id="cvc"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        placeholder="123"
        required
      />

      <label htmlFor="name">Cardholder Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="John Doe"
        required
      />

      <button type="submit">Submit Payment</button>
    </form>
  );
}

export default PaymentForm;
