import React from 'react';
import { render } from '@testing-library/react-native';

import ReceiptScreen from './receipt-screen';

describe('ReceiptScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<ReceiptScreen />);
    expect(root).toBeTruthy();
  });
});
