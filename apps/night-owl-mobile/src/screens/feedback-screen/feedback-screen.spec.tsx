import React from 'react';
import { render } from '@testing-library/react-native';

import FeedbackScreen from './feedback-screen';

describe('FeedbackScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<FeedbackScreen />);
    expect(root).toBeTruthy();
  });
});
