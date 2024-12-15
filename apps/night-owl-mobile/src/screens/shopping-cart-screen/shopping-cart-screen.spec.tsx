import React from 'react';
import { render } from '@testing-library/react-native';

import ShoppingCartScreen from './shopping-cart-screen';

describe('ShoppingCartScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<ShoppingCartScreen />);
    expect(root).toBeTruthy();
  });
});
