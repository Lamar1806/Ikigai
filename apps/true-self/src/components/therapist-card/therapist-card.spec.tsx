import { render } from '@testing-library/react';

import TherapistCard from './therapist-card';

describe('TherapistCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TherapistCard />);
    expect(baseElement).toBeTruthy();
  });
});
