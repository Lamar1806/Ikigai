import React from 'react';
import { render } from '@testing-library/react-native';
import <%= name %> from './<%= name %>';

describe('<%= name %>', () => {
  it('renders correctly', () => {
    const { getByText } = render(<<%= name %> />);
    expect(getByText('Hello <%= name %>')).toBeTruthy();
  });
});
