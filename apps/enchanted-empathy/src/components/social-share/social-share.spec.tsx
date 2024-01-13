import React from 'react';
import { render } from '@testing-library/react-native';

import SocialShare from './social-share';

describe('SocialShare', () => {
  it('should render successfully', () => {
    const { root } = render(<SocialShare />);
    expect(root).toBeTruthy();
  });
});
