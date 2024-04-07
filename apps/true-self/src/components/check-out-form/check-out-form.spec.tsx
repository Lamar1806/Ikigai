import { render } from '@testing-library/react';

import CheckOutForm from './check-out-form';

describe('CheckOutForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckOutForm />);
    expect(baseElement).toBeTruthy();
  });
});
