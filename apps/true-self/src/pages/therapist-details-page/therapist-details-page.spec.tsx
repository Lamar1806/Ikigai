import { render } from '@testing-library/react';

import TherapistDetailsPage from './therapist-details-page';

describe('TherapistDetailsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TherapistDetailsPage />);
    expect(baseElement).toBeTruthy();
  });
});
