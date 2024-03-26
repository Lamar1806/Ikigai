import { render } from '@testing-library/react';

import TestimonialCard from './testimonial-card';

describe('TestimonialCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialCard />);
    expect(baseElement).toBeTruthy();
  });
});
