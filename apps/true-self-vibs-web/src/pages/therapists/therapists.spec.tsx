import { render } from '@testing-library/react';

import Therapists from './therapists';

describe('Therapists', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Therapists />);
    expect(baseElement).toBeTruthy();
  });
});
