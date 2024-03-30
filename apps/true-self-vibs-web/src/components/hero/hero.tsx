import React, { FC } from 'react';
import styled from '@emotion/styled';

// Styled component for the hero container
const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust height as needed */
  overflow: hidden;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.95)
  ); /* Gradient with 90% black */
  background-size: cover;
  background-position: center;
`;

// Styled component for media (image or video)
const Media = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  letter-spacing: 1.3px;
  @media (min-width: 1200px) {
    /* Your CSS styles for screens up to 1200px wide */
    font-size: 30px;
  }
`;

interface MediaItem {
  type: 'image' | 'video';
  alt: string;
  url: string;
}

interface HeroProps {
  media: MediaItem[];
  text?: string;
  children?: React.ReactElement;
}

const Hero: FC<HeroProps> = ({ media, text, children }) => {
  return (
    <HeroWrapper>
      {media.map((item, index) => (
        <Media key={index}>
          {item.type === 'image' && (
            <img src={item.url} alt={`${index} ${item.alt}`} />
          )}
          {item.type === 'video' && (
            <video
              autoPlay
              muted
              loop
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            >
              <source src={item.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Media>
      ))}
      {text && <TextOverlay>{text}</TextOverlay>}
      {children && children}
    </HeroWrapper>
  );
};

export default Hero;
