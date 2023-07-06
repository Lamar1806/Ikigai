import React from 'react';
import { render } from '@testing-library/react-native';

import Image from './image';

describe('Image', () => {
  it('should render successfully', () => {
    const { root } = render(<Image />);
    expect(root).toBeTruthy();
  });
});
