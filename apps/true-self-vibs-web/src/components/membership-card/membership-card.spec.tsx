import { render } from '@testing-library/react';

import MembershipCard from './membership-card';

describe('MembershipCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MembershipCard />);
    expect(baseElement).toBeTruthy();
  });
});
