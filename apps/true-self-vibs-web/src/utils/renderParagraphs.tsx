import React from 'react';
import styled from '@emotion/styled';

// Define styled component for paragraphs
const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: black;
`;

// Function to render paragraphs with styled components
export const renderParagraphs = (text: string) => {
  // Split the text into paragraphs based on line breaks
  const paragraphs = text.split('\n\n');

  // Render each paragraph with the styled component
  return paragraphs.map((paragraph, index) => (
    <StyledParagraph key={index}>{paragraph}</StyledParagraph>
  ));
};
