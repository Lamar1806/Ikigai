import { render } from '@testing-library/react';

import Therapistdetails from './therapistdetails';

describe('Therapistdetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Therapistdetails />);
    expect(baseElement).toBeTruthy();
  });
});
