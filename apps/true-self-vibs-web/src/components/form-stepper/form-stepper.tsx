import React from 'react';
// Import styled from @emotion/styled for creating styled components
import styled from '@emotion/styled';

interface Props {
  step: number;
  title: string;
  handleNext: () => void;
  handlePrevious: () => void;
  children?: React.ReactNode;
  explaination?: string;
}

// Create a styled paragraph for the title
const Title = styled.p`
  font-weight: 300;
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

const Explanation = styled.p``;

const FormStepper: React.FC<Props> = ({
  step,
  title,
  handleNext,
  handlePrevious,
  children,
  explaination,
}) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
      <Explanation>{explaination}</Explanation>
      <div>
        <Button onClick={handlePrevious} disabled={step <= 1}>
          Previous
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default FormStepper;
