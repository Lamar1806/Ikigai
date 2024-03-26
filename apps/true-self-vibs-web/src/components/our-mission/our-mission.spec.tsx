import { render } from '@testing-library/react';

import OurMission from './our-mission';

describe('OurMission', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OurMission />);
    expect(baseElement).toBeTruthy();
  });
});
