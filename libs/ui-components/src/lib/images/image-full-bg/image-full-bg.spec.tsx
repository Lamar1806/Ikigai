import React from 'react';
import { render } from '@testing-library/react-native';

import ImageFullBg from './image-full-bg';

describe('ImageFullBg', () => {
  it('should render successfully', () => {
    const { root } = render(<ImageFullBg />);
    expect(root).toBeTruthy();
  });
});
