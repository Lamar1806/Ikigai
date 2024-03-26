import React from 'react';
import Card from '../card-with-number/card-with-number';
import { FeatureItem } from '../../api/mocks/features';
import styled from '@emotion/styled';

const H2 = styled.h2`
  margin-top: 100px;
  margin-bottom: 60px;
  font-weight: 300;
  font-size: 48px;
  text-align: center;
`;

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center; */
`;

const RowContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  @media (max-width: 576px) {
    /* CSS styles for extra small devices go here */
  }

  /* Small Devices (tablets) */
  @media (min-width: 576px) and (max-width: 768px) {
    /* CSS styles for small devices go here */
  }

  /* Medium Devices (small laptops, tablets in landscape) */
  @media (min-width: 768px) and (max-width: 992px) {
    /* CSS styles for medium devices go here */
  }

  /* Large Devices (desktops, laptops) */
  @media (min-width: 992px) and (max-width: 1200px) {
    /* CSS styles for large devices go here */
  }

  /* Extra Large Devices (large desktops, wide screens) */
  @media (min-width: 1200px) {
    /* CSS styles for extra large devices go here */
    flex-direction: row;
    padding: 0;
  }
`;

const CardContainer = styled.div`
  margin-right: 20px;
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
    <Container>
      <H2>Features and Benefits of TrueSelf</H2>
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
    </Container>
  );
};

export default Features;
