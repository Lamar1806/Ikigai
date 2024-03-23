import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';
import { useEffect } from 'react';

const StyledApp = styled.div`
  // Your style here
`;

async function fetchRecentRelease(page: number, type: string) {
  try {
    const response = await fetch(`/recent-release?page=${page}&type=${type}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export function App() {
  useEffect(() => {
    fetchRecentRelease(1, 'movie').then((data) => console.log(data));
    console.log('hi');
  });
  // Example usage:

  return (
    <StyledApp>
      <NxWelcome title="ani-ikigai-web" />
    </StyledApp>
  );
}

export default App;
