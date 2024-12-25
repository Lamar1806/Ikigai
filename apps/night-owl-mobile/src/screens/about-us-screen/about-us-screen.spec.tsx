import React from 'react';
import { render } from '@testing-library/react-native';

import AboutUsScreen from './about-us-screen';

describe('AboutUsScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<AboutUsScreen />);
    expect(root).toBeTruthy();
  });
});
