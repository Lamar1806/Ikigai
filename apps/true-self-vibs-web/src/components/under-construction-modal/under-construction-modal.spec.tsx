import { render } from '@testing-library/react';

import UnderConstructionModal from './under-construction-modal';

describe('UnderConstructionModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UnderConstructionModal />);
    expect(baseElement).toBeTruthy();
  });
});
