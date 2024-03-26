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
