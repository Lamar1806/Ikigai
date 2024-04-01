import { render } from '@testing-library/react';

import RenewalBanner from './renewal-banner';

describe('RenewalBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RenewalBanner />);
    expect(baseElement).toBeTruthy();
  });
});
