import React from 'react';
import { render } from '@testing-library/react-native';

import Counter from './counter';

describe('Counter', () => {
  it('should render successfully', () => {
    const { root } = render(<Counter />);
    expect(root).toBeTruthy();
  });
});
