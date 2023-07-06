import React from 'react';
import { render } from '@testing-library/react-native';

import CreateAccount from './create-account';

describe('CreateAccount', () => {
  it('should render successfully', () => {
    const { root } = render(<CreateAccount />);
    expect(root).toBeTruthy();
  });
});
