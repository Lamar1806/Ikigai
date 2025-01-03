import styled from '@emotion/styled';
import { testimonialData } from '../../api/mocks/testimonial';
import TestimonialsRowComponent from '../testimonials-row-component/testimonials-row-component';
import RemRem from '../../assets/images/RemRem@3x.png';
import TestimonialsImageComponent from '../testimonials-image-component/testimonials-image-component';
/* eslint-disable-next-line */
export interface TestimonialsProps {}

const StyledTestimonials = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
`;

export function Testimonials(props: TestimonialsProps) {
  return (
    <StyledTestimonials>
      <TestimonialsImageComponent src={RemRem} />
      <TestimonialsRowComponent testimonialData={testimonialData} />
    </StyledTestimonials>
  );
}

export default Testimonials;
