import { render } from '@testing-library/react';

import WhatBringsYouHerePage from './what-brings-you-here-page';

describe('WhatBringsYouHerePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhatBringsYouHerePage />);
    expect(baseElement).toBeTruthy();
  });
});
