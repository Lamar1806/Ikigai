import styled from '@emotion/styled';
import { Navbar } from '../components/navbar/navbar';
import Hero from '../components/hero/hero';

const StyledContainer = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledContainer>
      <Navbar />
      <Hero
        media={[{ type: 'image', url: 'path/to/image1.jpg', alt: '1' }]}
        text="True Self Vibs"
      />

      <section></section>
    </StyledContainer>
  );
}

export default App;
