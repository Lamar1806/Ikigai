/** @jsxImportSource @emotion/react */
import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import styled from '@emotion/native';

interface BackgroundImageProps {
  source: any; // The image source (require or URL)
  children?: React.ReactNode; // Children to render on top of the image
  overlayColor?: string; // Optional: Overlay color with transparency
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  source,
  children,
  overlayColor = 'rgba(0, 0, 0, 0.3)', // Default overlay color
}) => {
  return (
    <StyledImageBackground source={source} resizeMode="cover">
      {/* Optional overlay */}
      {overlayColor && <Overlay style={{ backgroundColor: overlayColor }} />}
      <ContentContainer>{children}</ContentContainer>
    </StyledImageBackground>
  );
};

const StyledImageBackground = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Overlay = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ContentContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default BackgroundImage;
