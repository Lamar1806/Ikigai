import React from 'react';
import styled from 'styled-components';

// Define the card container
const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
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
    height: 350px;
    width: auto;
  }
`;

// Define the thumbnail image
const ThumbnailImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

// Define the name
const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Define the experience
const Experience = styled.div`
  font-size: 16px;
`;

// Define the props interface
interface TestimonialCardProps {
  src: string;
  name: string;
  experience: string;
}

// Define the TestimonialCard functional component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  src,
  name,
  experience,
}) => {
  return (
    <CardContainer>
      <ThumbnailImage src={src} alt={`Thumbnail for ${name}`} />
      <Name>{name}</Name>
      <Experience>{experience}</Experience>
    </CardContainer>
  );
};

export default TestimonialCard;
