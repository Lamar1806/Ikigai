import React from 'react';
import { render } from '@testing-library/react-native';

import WalletScreen from './wallet-screen';

describe('WalletScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<WalletScreen />);
    expect(root).toBeTruthy();
  });
});
