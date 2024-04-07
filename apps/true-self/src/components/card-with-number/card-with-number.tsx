import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow here */
  max-width: 338px;
  display: inline-block;
  margin-right: 16px;
  height: 370px;
`;

const CardNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardText = styled.div`
  margin-bottom: 10px;
`;

interface CardProps {
  number: number;
  title: string;
  featureText: string;
  benefitText: string;
}

const Card: React.FC<CardProps> = ({
  number,
  title,
  featureText,
  benefitText,
}) => {
  return (
    <CardContainer>
      <CardNumber>{number}</CardNumber>
      <CardTitle>{title}</CardTitle>
      <CardText>
        <strong>Feature:</strong> {featureText}
      </CardText>
      <CardText>
        <strong>Benefit:</strong> {benefitText}
      </CardText>
    </CardContainer>
  );
};

export default Card;
