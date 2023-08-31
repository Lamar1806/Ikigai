import React from 'react';
import { render } from '@testing-library/react-native';

import ScrollView from './scroll-view';

describe('ScrollView', () => {
  it('should render successfully', () => {
    const { root } = render(<ScrollView />);
    expect(root).toBeTruthy();
  });
});
