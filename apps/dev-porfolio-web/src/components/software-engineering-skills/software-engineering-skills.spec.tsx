import { render } from '@testing-library/react';

import SoftwareEngineeringSkills from './software-engineering-skills';

describe('SoftwareEngineeringSkills', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SoftwareEngineeringSkills />);
    expect(baseElement).toBeTruthy();
  });
});
