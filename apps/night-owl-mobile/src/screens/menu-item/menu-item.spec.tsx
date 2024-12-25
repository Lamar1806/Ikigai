import React from 'react';
import { render } from '@testing-library/react-native';

import MenuItem from './menu-item';

describe('MenuItem', () => {
  it('should render successfully', () => {
    const { root } = render(<MenuItem />);
    expect(root).toBeTruthy();
  });
});
