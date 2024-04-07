import { render } from '@testing-library/react';

import TestimonialsImageComponent from './testimonials-image-component';

describe('TestimonialsImageComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialsImageComponent />);
    expect(baseElement).toBeTruthy();
  });
});
