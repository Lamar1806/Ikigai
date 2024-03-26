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
  flex-direction: column;
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
    flex-direction: row;
  }
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
