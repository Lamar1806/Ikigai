import { render } from '@testing-library/react';

import CheckOutMembership from './check-out-membership';

describe('CheckOutMembership', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckOutMembership />);
    expect(baseElement).toBeTruthy();
  });
});
