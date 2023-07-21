import React from 'react';
import { render } from '@testing-library/react-native';
import ViewImage from './ViewImage';

describe('ViewImage', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ViewImage />);
    expect(getByText('Hello ViewImage')).toBeTruthy();
  });
});
