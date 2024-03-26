import React from 'react';
import styled from 'styled-components';
import { TestimonialData } from '../../api/mocks/testimonial';
import TestimonialCard from '../testimonial-card/testimonial-card';

// Define a styled container for the row of testimonial images
const TestimonialsRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

// Define a styled wrapper for each testimonial image
const TestimonialsImageWrapper = styled.div`
  width: calc(
    33.33% - 10px
  ); /* Each image takes up 1/3 of the container width with some spacing */
  margin-bottom: 20px;
`;

// Define the TestimonialsRowComponent functional component
const TestimonialsRowComponent: React.FC<{
  testimonialData: TestimonialData[];
}> = ({ testimonialData }) => {
  return (
    <div>
      <TestimonialsRowContainer>
        {testimonialData.map((item, index) => (
          <TestimonialsImageWrapper key={index}>
            <TestimonialCard
              src={item.thumbnailSrc}
              name={item.name}
              experience={item.experience}
            />
          </TestimonialsImageWrapper>
        ))}
      </TestimonialsRowContainer>
    </div>
  );
};

export default TestimonialsRowComponent;
