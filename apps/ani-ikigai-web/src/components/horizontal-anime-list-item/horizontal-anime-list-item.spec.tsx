import { render } from '@testing-library/react';

import HorizontalAnimeListItem from './horizontal-anime-list-item';

describe('HorizontalAnimeListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HorizontalAnimeListItem />);
    expect(baseElement).toBeTruthy();
  });
});
