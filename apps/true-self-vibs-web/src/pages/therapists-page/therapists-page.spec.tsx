import { render } from '@testing-library/react';

import TherapistsPage from './therapists-page';

describe('TherapistsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TherapistsPage />);
    expect(baseElement).toBeTruthy();
  });
});
