import React from 'react';
import { render } from '@testing-library/react-native';

import SignupScreen from './signup-screen';

describe('SignupScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<SignupScreen />);
    expect(root).toBeTruthy();
  });
});
