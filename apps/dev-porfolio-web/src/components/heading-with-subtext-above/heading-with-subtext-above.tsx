import React from 'react';
import styled from 'styled-components';

interface HeadingProps {
  heading: string;
  subHeading: string;
  textAlign?: 'left' | 'center' | 'right'; // Optional prop with default alignment options
}

const Container = styled.div<{ textAlign?: 'left' | 'center' | 'right' }>`
  text-align: ${({ textAlign = 'center' }) =>
    textAlign}; // Default to center if not provided
  margin: 20px;
`;

const SubHeading = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

const MainHeading = styled.h1`
  font-size: 36px;
  margin: 10px 0;
`;

export const HeadingWithSubtextAbove: React.FC<HeadingProps> = ({
  heading,
  subHeading,
  textAlign,
}) => (
  <Container textAlign={textAlign}>
    <SubHeading>{subHeading}</SubHeading>
    <MainHeading>{heading}</MainHeading>
  </Container>
);
