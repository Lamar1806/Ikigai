import { render } from '@testing-library/react';

import TestimonialsRowComponent from './testimonials-row-component';

describe('TestimonialsRowComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialsRowComponent />);
    expect(baseElement).toBeTruthy();
  });
});
