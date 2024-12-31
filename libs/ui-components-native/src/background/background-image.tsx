/** @jsxImportSource @emotion/react */
import React from 'react';
import { ImageBackground, View, ViewStyle } from 'react-native';
import styled from '@emotion/native';

interface BackgroundImageProps {
  source: any; // The image source (require or URL)
  children?: React.ReactNode; // Children to render on top of the image
  overlayColor?: string; // Optional: Overlay color with transparency
  style?: ViewStyle; // Optional: Style for the content container
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  source,
  children,
  overlayColor = 'rgba(0, 0, 0, 0.6)', // Default overlay color
  style, // New: Accept custom styles
}) => {
  return (
    <StyledImageBackground source={source} resizeMode="cover">
      {/* Optional overlay */}
      {overlayColor && <Overlay style={{ backgroundColor: overlayColor }} />}
      <ContentContainer style={style}>{children}</ContentContainer>
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
