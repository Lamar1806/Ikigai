import { render } from '@testing-library/react';

import OverlayComponent from './overlay-component';

describe('OverlayComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OverlayComponent />);
    expect(baseElement).toBeTruthy();
  });
});
