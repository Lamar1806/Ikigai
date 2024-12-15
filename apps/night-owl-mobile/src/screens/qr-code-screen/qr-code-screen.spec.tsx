import React from 'react';
import { render } from '@testing-library/react-native';

import QrCodeScreen from './qr-code-screen';

describe('QrCodeScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<QrCodeScreen />);
    expect(root).toBeTruthy();
  });
});
