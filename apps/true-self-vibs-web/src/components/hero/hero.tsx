import React, { FC } from 'react';
import styled from '@emotion/styled';

// Styled component for the hero container
const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px; /* Adjust height as needed */
  overflow: hidden;
`;

// Styled component for media (image or video)
const Media = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;

interface MediaItem {
  type: 'image' | 'video';
  alt: string;
  url: string;
}

interface HeroProps {
  media: MediaItem[];
  text?: string;
}

const Hero: FC<HeroProps> = ({ media, text }) => {
  return (
    <HeroWrapper>
      {media.map((item, index) => (
        <Media key={index}>
          {item.type === 'image' && (
            <img src={item.url} alt={`${index} ${item.alt}`} />
          )}
          {item.type === 'video' && (
            <video autoPlay muted loop>
              <source src={item.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Media>
      ))}
      {text && <TextOverlay>{text}</TextOverlay>}
    </HeroWrapper>
  );
};

export default Hero;
