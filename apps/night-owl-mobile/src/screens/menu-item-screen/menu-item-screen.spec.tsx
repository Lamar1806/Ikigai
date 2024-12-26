import React from 'react';
import { render } from '@testing-library/react-native';

import { MenuItemScreen } from './menu-item-screen';

describe('MenuItemScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<MenuItemScreen />);
    expect(root).toBeTruthy();
  });
});
