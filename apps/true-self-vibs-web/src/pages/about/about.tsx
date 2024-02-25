import React from 'react';
import styled from '@emotion/styled';
import chihiroImage from '../../assets/images/chihiro_image.jpg';

// Define the type for the styled component props
interface AboutSectionProps {
  backgroundImage: string; // Define backgroundImage prop with type string
}

// Define the styled component with the correct prop type
const AboutSection = styled.section<AboutSectionProps>`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Adjust opacity as needed */
`;

const DescriptionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
`;

const DescriptionText = styled.p`
  font-size: 24px;
  line-height: 1.5;
`;

// Create the About component
export const About = () => {
  return (
    <AboutSection backgroundImage={chihiroImage}>
      <DarkOverlay />
      <DescriptionContainer>
        <DescriptionText>
          In the labyrinth of existence, where shadows dance with the soul and
          echoes of the past linger like ghosts on a train, True Self emerges as
          a guiding light. Our journey transcends the mundane, diving deep into
          the depths of the human psyche to unravel the mysteries within. Just
          as Chihiro navigates the spirit world, confronting fears and forging
          her path forward, True Self accompanies you on your odyssey of
          self-discovery. Here, amidst the enigmatic landscape of the mind, we
          embark on a voyage of transformation—a journey where every twist and
          turn reveals a new facet of your essence. Through the alchemy of
          empathy and understanding, we transmute pain into power, scars into
          strength. Like the spirits that populate Chihiro's world, each aspect
          of your being is acknowledged, embraced, and ultimately transformed
          into the radiant tapestry of your True Self. Join us as we traverse
          the realms of consciousness, where shadows converge with light, and
          the whispers of the past guide us towards the dawn of a new beginning.
          Together, let us embark on this voyage of self-discovery, where every
          step forward is a testament to the infinite potential within.
        </DescriptionText>
      </DescriptionContainer>
    </AboutSection>
  );
};
