import React from 'react';
import { render } from '@testing-library/react-native';

import LoginOrSignup from './login-or-signup';

describe('LoginOrSignup', () => {
  it('should render successfully', () => {
    const { root } = render(<LoginOrSignup />);
    expect(root).toBeTruthy();
  });
});
