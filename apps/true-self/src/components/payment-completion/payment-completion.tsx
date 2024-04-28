import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

/* eslint-disable-next-line */
export interface PaymentCompletionProps {}

const StyledPaymentCompletion = styled.div`
  color: pink;
`;

export function PaymentCompletion(props: PaymentCompletionProps) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const paymentIntent = searchParams.get('payment_intent');
  const paymentIntentClientSecret = searchParams.get(
    'payment_intent_client_secret'
  );
  const redirectStatus = searchParams.get('redirect_status');

  return (
    <div>
      <h1>Payment Details</h1>
      <br />
      <p>Payment Intent: {paymentIntent}</p>
      <br />
      <p>Payment Intent Client Secret: {paymentIntentClientSecret}</p>
      <br />
      <p>Redirect Status: {redirectStatus}</p>
    </div>
  );
}

export default PaymentCompletion;
