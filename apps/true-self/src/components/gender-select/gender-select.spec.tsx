import { render } from '@testing-library/react';

import GenderSelect from './gender-select';

describe('GenderSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenderSelect />);
    expect(baseElement).toBeTruthy();
  });
});
