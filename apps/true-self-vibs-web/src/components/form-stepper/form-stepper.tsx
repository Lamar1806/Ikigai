import React from 'react';
// Import styled from @emotion/styled for creating styled components
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FormStepperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

// Create a styled paragraph for the title
const Title = styled.h2`
  font-weight: 300;
  margin-bottom: 30px;
`;

// Create styled buttons with the desired styles
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin: 5px;

  &:disabled {
    background-color: grey;
  }
`;

const ButtonNav = styled(Link)`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin: 5px;
  text-decoration: none;

  &:disabled {
    background-color: grey;
  }
`;

const Explanation = styled.p`
  max-width: 600px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

interface Props {
  step: number;
  title: string;
  handleNext: () => void;
  handlePrevious: () => void;
  children?: React.ReactNode;
  explanation: string;
  stepsLength: number;
}

const FormStepper: React.FC<Props> = ({
  stepsLength,
  step,
  title,
  handleNext,
  handlePrevious,
  children,
  explanation,
}) => {
  return (
    <FormStepperStyled>
      <Title>{title}</Title>
      {children}
      <Explanation>{explanation}</Explanation>
      <div>
        <Button onClick={handlePrevious} disabled={step <= 1}>
          Previous
        </Button>
        {step !== stepsLength - 1 && <Button onClick={handleNext}>Next</Button>}
        {step === stepsLength - 1 && (
          <ButtonNav to={'/therapists'}>Find A Therepist</ButtonNav>
        )}
      </div>
    </FormStepperStyled>
  );
};

export default FormStepper;
