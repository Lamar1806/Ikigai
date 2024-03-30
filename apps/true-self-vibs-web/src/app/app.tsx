import Navbar from '../components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import Footer from '../components/footer/footer';
import UnderConstructionModal from '../components/under-construction-modal/under-construction-modal';
import TherapistsPage from '../pages/therapists-page/therapists-page';
import styled from '@emotion/styled';
import TherapistDetailsPage from '../pages/therapist-details-page/therapist-details-page';

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
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/therapists">
              <TherapistsPage />
            </Route>
            <Route path="/therapists/:id">
              <TherapistDetailsPage />
            </Route>
          </Switch>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
