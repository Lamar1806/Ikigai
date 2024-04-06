import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CheckOutFormProps {}

const StyledCheckOutForm = styled.div`
  color: pink;
`;

export function CheckOutForm(props: CheckOutFormProps) {
  return (
    <StyledCheckOutForm>
      <h1>Welcome to CheckOutForm!</h1>
    </StyledCheckOutForm>
  );
}

export default CheckOutForm;
