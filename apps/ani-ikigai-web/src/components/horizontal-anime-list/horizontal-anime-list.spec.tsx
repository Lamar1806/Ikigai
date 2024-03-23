import { render } from '@testing-library/react';

import HorizontalAnimeList from './horizontal-anime-list';

describe('HorizontalAnimeList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HorizontalAnimeList />);
    expect(baseElement).toBeTruthy();
  });
});
