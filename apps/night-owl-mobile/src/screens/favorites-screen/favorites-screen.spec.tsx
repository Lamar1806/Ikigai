import React from 'react';
import { render } from '@testing-library/react-native';

import FavoritesScreen from './favorites-screen';

describe('FavoritesScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<FavoritesScreen />);
    expect(root).toBeTruthy();
  });
});
