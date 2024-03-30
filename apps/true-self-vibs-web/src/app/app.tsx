import Navbar from '../components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import Footer from '../components/footer/footer';
import UnderConstructionModal from '../components/under-construction-modal/under-construction-modal';
import TherapistsPage from '../pages/therapists-page/therapists-page';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

export function App() {
  return (
    <Router>
      <AppContainer>
        <UnderConstructionModal />
        <Navbar />
        <ContentWrapper>
          <Switch>
            {/* Define the /therapists route before the / route to ensure it's matched first */}
            <Route path="/therapists">
              <TherapistsPage />
            </Route>
            {/* Use the exact prop on the root path to ensure it only matches the exact path "/" */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
