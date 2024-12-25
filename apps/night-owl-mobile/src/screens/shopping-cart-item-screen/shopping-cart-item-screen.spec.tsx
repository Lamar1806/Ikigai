import React from 'react';
import { render } from '@testing-library/react-native';

import ShoppingCartItemScreen from './shopping-cart-item-screen';

describe('ShoppingCartItemScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<ShoppingCartItemScreen />);
    expect(root).toBeTruthy();
  });
});
