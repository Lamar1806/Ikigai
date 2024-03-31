import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FormStepperProps {}

const StyledFormStepper = styled.div`
  color: pink;
`;

export function FormStepper(props: FormStepperProps) {
  return (
    <StyledFormStepper>
      <h1>Welcome to FormStepper!</h1>
    </StyledFormStepper>
  );
}

export default FormStepper;
