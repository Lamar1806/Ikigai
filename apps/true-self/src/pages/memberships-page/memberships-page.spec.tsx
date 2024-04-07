import { render } from '@testing-library/react';

import MembershipsPage from './memberships-page';

describe('MembershipsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MembershipsPage />);
    expect(baseElement).toBeTruthy();
  });
});
