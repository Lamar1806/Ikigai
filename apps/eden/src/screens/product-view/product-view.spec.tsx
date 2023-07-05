import React from 'react';
import { render } from '@testing-library/react-native';

import ProductView from './product-view';

describe('ProductView', () => {
  it('should render successfully', () => {
    const { root } = render(<ProductView />);
    expect(root).toBeTruthy();
  });
});
