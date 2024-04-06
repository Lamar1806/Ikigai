import styled from '@emotion/styled';
import { PaymentElement } from '@stripe/react-stripe-js';

/* eslint-disable-next-line */
export interface CheckOutFormProps {}

const StyledCheckOutForm = styled.div`
  color: pink;
`;

export function CheckOutForm(props: CheckOutFormProps) {
  return (
    <StyledCheckOutForm>
      <PaymentElement />
    </StyledCheckOutForm>
  );
}

export default CheckOutForm;
