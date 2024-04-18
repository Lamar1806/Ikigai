import { render } from '@testing-library/react';

import SocialLoginButtons from './social-login-buttons';

describe('SocialLoginButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialLoginButtons />);
    expect(baseElement).toBeTruthy();
  });
});
