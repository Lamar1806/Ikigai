import React from 'react';
import styled from '@emotion/styled';
import Blossoms from '../../assets/images/Blossoms of Renewal- A Path to Healing.png';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroContainer = styled.div`
  position: relative;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden; // Prevents the image from exceeding the container's bounds
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%; // Cover the width
  height: 100%; // Cover the height
  object-fit: cover; // Cover the container properly
  z-index: 0; // Ensure it's behind the content
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const Title = styled.h1`
  z-index: 2;
  color: white;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  font-weight: 300;
`;

const Subtitle = styled.h2`
  z-index: 2;
  color: white;
  font-size: 1rem;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  font-weight: 300;
`;

const TitleContainer = styled.div`
  position: relative;
  top: 75px;
  z-index: 2;
`;

const HeroForQuarterScreen: React.FC<HeroProps> = ({
  title = 'Blossoms of Renewal: A Path to Healing',
  subtitle = 'Get The Help You Need',
  backgroundImage = Blossoms,
}) => {
  return (
    <HeroContainer>
      <BackgroundImage src={backgroundImage} alt="Background" />
      <Overlay />
      <TitleContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
      </TitleContainer>
    </HeroContainer>
  );
};

export default HeroForQuarterScreen;
