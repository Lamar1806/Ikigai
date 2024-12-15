import React from 'react';
import { render } from '@testing-library/react-native';

import AddPaymentMethodScreen from './add-payment-method-screen';

describe('AddPaymentMethodScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<AddPaymentMethodScreen />);
    expect(root).toBeTruthy();
  });
});
