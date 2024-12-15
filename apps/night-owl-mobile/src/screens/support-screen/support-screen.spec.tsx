import React from 'react';
import { render } from '@testing-library/react-native';

import SupportScreen from './support-screen';

describe('SupportScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<SupportScreen />);
    expect(root).toBeTruthy();
  });
});
