import React from 'react';
import { render } from '@testing-library/react-native';

import ViewPaymentScreen from './view-payment-screen';

describe('ViewPaymentScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<ViewPaymentScreen />);
    expect(root).toBeTruthy();
  });
});
