import React from 'react';
import { render } from '@testing-library/react-native';

import MenuScreen from './menu-screen';

describe('MenuScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<MenuScreen />);
    expect(root).toBeTruthy();
  });
});
