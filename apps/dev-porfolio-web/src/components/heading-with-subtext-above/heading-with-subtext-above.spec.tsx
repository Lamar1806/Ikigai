import { render } from '@testing-library/react';

import HeadingWithSubtextAbove from './heading-with-subtext-above';

describe('HeadingWithSubtextAbove', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeadingWithSubtextAbove />);
    expect(baseElement).toBeTruthy();
  });
});
