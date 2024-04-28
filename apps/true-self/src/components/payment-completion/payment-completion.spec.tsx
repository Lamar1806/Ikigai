import { render } from '@testing-library/react';

import PaymentCompletion from './payment-completion';

describe('PaymentCompletion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaymentCompletion />);
    expect(baseElement).toBeTruthy();
  });
});
