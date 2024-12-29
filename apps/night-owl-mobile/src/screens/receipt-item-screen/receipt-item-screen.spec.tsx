import React from 'react';
import { render } from '@testing-library/react-native';

import ReceiptItemScreen from './receipt-item-screen';

describe('ReceiptItemScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<ReceiptItemScreen />);
    expect(root).toBeTruthy();
  });
});
