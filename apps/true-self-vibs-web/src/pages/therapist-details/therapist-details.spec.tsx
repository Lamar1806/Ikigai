import { render } from '@testing-library/react';

import TherapistDetails from './therapist-details';

describe('TherapistDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TherapistDetails />);
    expect(baseElement).toBeTruthy();
  });
});
