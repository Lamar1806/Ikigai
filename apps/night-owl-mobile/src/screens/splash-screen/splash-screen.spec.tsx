import React from 'react';
import { render } from '@testing-library/react-native';

import SplashScreen from './splash-screen';

describe('SplashScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<SplashScreen />);
    expect(root).toBeTruthy();
  });
});
