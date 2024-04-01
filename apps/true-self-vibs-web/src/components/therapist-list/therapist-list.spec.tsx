import { render } from '@testing-library/react';

import TherapistList from './therapist-list';

describe('TherapistList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TherapistList />);
    expect(baseElement).toBeTruthy();
  });
});
