import styled from '@emotion/styled';
import { useState } from 'react';

const StyledPaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div``;

const Label = styled.label`
  margin-bottom: 8px;
  align-self: flex-start;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 5px;
`;

const Submit = styled.button`
  padding: 16px;
  background-color: transparent;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: black;
    color: white;
  }
`;

export function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');

  const handleCardNumberChange = (event: any) => {
    const value = event.target.value.replace(/\s+/g, '');
    if (value.length <= 20) {
      const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
      setCardNumber(formattedValue);
    }
  };

  const handleExpiryChange = (event: any) => {
    const value = event.target.value.replace(/\D+/g, '');
    if (value.length <= 4) {
      const formattedValue =
        value.length === 4
          ? value.substring(0, 2) + '/' + value.substring(2)
          : value;
      setExpiry(formattedValue);
    }
  };

  const handleCvcChange = (event: any) => {
    const value = event.target.value;
    if (value.length <= 3) setCvc(value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    console.log('Form submitted:', { cardNumber, expiry, cvc, name });
  };

  return (
    <StyledPaymentForm onSubmit={handleFormSubmit}>
      <Label htmlFor="cardNumber">Card Number</Label>
      <Input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
        placeholder="1234 5678 9012 3456"
        maxLength={23} // Account for spaces
        required
      />
      <Label htmlFor="expiry">Expiry Date</Label>
      <Input
        type="text"
        id="expiry"
        value={expiry}
        onChange={handleExpiryChange}
        placeholder="MM/YY"
        required
      />
      <Label htmlFor="cvc">CVC</Label>
      <Input
        type="text"
        id="cvc"
        value={cvc}
        onChange={handleCvcChange}
        placeholder="123"
        maxLength={5} // 4 digits plus the slash
        required
      />
      <Label htmlFor="name">Cardholder Name</Label>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="John Doe"
        maxLength={50}
        required
      />
      <Submit type="submit">Submit Payment</Submit>
    </StyledPaymentForm>
  );
}

export default PaymentForm;
