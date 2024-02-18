import styled from '@emotion/styled';
import { Navbar } from '../components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from '../pages/home/home';
const StyledContainer = styled.div`
  // Your style here
`;

export function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
