import React from 'react';
import { render } from '@testing-library/react-native';

import { View } from './View';

describe('View', () => {
  it('should render successfully', () => {
    const { root } = render(<View />);
    expect(root).toBeTruthy();
  });
});
