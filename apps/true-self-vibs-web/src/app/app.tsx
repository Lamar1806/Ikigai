import styled from '@emotion/styled';

const StyledContainer = styled.div`
  // Your style here
  a {
  }
`;

export function App() {
  return (
    <StyledContainer>
      <nav className="mainNavBar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Articles</li>
          <li>Videos</li>
          <li>Apps</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="heroImage">
        <img src="" alt="" />
        <h1 className="heroImageText">True Self Vibs</h1>
      </div>
    </StyledContainer>
  );
}

export default App;
