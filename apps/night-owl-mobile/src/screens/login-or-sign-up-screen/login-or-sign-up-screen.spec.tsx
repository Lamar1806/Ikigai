import React from 'react';
import { render } from '@testing-library/react-native';

import LoginOrSignUpScreen from './login-or-sign-up-screen';

describe('LoginOrSignUpScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<LoginOrSignUpScreen />);
    expect(root).toBeTruthy();
  });
});
