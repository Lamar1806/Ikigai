import React from 'react';
import styled from '@emotion/styled';

// Define styled components
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.p`
  font-size: 20px;
  margin-bottom: 16px;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  letter-spacing: 0.6px;
`;

const H1 = styled.h1`
  font-size: 42px;
  font-weight: 300;
`;

interface MissionItem {
  title: string;
  paragraphText: string;
}

interface Props {
  [key: string]: MissionItem;
}

// OurMission component
const OurMission: React.FC<Props> = ({ missionData }) => {
  return (
    <Container>
      <H1>Our Mission</H1>
      {Object.keys(missionData).map((key) => (
        <div key={key}>
          {/* @ts-ignore */}
          <Title>{missionData[key].title}</Title>
          {/* @ts-ignore */}
          <Paragraph>{missionData[key].paragraphText}</Paragraph>
        </div>
      ))}
    </Container>
  );
};

export default OurMission;
