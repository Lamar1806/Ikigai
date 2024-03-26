import React from 'react';
import Card from '../card-with-number/card-with-number';
import { FeatureItem } from '../../api/mocks/features';
import styled from '@emotion/styled';

const H2 = styled.h2`
  margin-top: 100px;
  margin-bottom: 60px;
  font-weight: 300;
  font-size: 48px;
`;

const RowContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const CardContainer = styled.div`
  display: inline-block; /* Change display to inline-block */
  margin-right: 20px; /* Add margin right to create space between cards */
`;

interface FeaturesProps {
  features: FeatureItem[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  // Split the features into rows of three
  const rows: FeatureItem[][] = [];
  for (let i = 0; i < features.length; i += 3) {
    rows.push(features.slice(i, i + 3));
  }

  return (
    <div>
      <H2>Features and Benefits of TrueSelf:</H2>
      {rows.map((row, index) => (
        <RowContainer key={index}>
          {row.map((feature) => (
            <CardContainer key={feature.number}>
              <Card
                number={feature.number}
                title={feature.title}
                featureText={feature.featureText}
                benefitText={feature.benefitText}
              />
            </CardContainer>
          ))}
        </RowContainer>
      ))}
    </div>
  );
};

export default Features;
