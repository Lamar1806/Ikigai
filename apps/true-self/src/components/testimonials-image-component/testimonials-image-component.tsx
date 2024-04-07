import React from 'react';
import styled from 'styled-components';

// Define the styled image component
const TestimonialsImage = styled.img`
  width: 100%;
  max-width: 682px;
  max-height: 682px;
  opacity: 0.8;
  margin-bottom: 60px;
`;

// Define the props interface
interface TestimonialsImageProps {
  src: string;
  alt?: string;
}

// Define the TestimonialsImageComponent functional component
const TestimonialsImageComponent: React.FC<TestimonialsImageProps> = ({
  src,
  alt,
}) => {
  return (
    <TestimonialsImage
      src={src}
      alt={alt || 'TestimonialsImageComponent RemRem Re;Zero Hugs'}
    />
  );
};

export default TestimonialsImageComponent;
