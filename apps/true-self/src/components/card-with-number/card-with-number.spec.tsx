import { render } from '@testing-library/react';

import CardWithNumber from './card-with-number';

describe('CardWithNumber', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardWithNumber />);
    expect(baseElement).toBeTruthy();
  });
});
