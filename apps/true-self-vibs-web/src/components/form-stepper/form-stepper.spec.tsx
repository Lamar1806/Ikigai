import { render } from '@testing-library/react';

import FormStepper from './form-stepper';

describe('FormStepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormStepper />);
    expect(baseElement).toBeTruthy();
  });
});
