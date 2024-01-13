import React from 'react';
import { render } from '@testing-library/react-native';

import Contacts from './contacts';

describe('Contacts', () => {
  it('should render successfully', () => {
    const { root } = render(<Contacts />);
    expect(root).toBeTruthy();
  });
});
