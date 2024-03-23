import styled from '@emotion/styled';
import { Home } from '../pages/home/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const StyledApp = styled.div`
  // Your style here
`;

// Create a client
const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <Home />
      </StyledApp>
    </QueryClientProvider>
  );
}

export default App;
