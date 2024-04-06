import Navbar from '../components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import Footer from '../components/footer/footer';
import UnderConstructionModal from '../components/under-construction-modal/under-construction-modal';
import TherapistsPage from '../pages/therapists-page/therapists-page';
import styled from '@emotion/styled';
import TherapistDetailsPage from '../pages/therapist-details-page/therapist-details-page';
import WhatBringsYouHerePage from '../pages/what-brings-you-here-page/what-brings-you-here-page';
import ComingSoon from '../components/coming-soon/coming-soon';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MembershipsPage from '../pages/memberships-page/memberships-page';
import CheckOutMembership from '../pages/check-out-membership/check-out-membership';

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
            <Route exact path="/memberships">
              <MembershipsPage />
            </Route>
            <Route exact path="/memberships/:id">
              <CheckOutMembership />
            </Route>
            <Route path="/WhatBringsYouHere">
              <WhatBringsYouHerePage />
            </Route>
            <Route exact path="/therapists">
              <TherapistsPage />
            </Route>
            <Route exact path="/therapists/:id">
              <TherapistDetailsPage />
            </Route>
            <Route exact path="/doctors">
              <ComingSoon />
            </Route>
            <Route exact path="/videos">
              <ComingSoon />
            </Route>
            <Route exact path="/apps">
              <ComingSoon />
            </Route>
            <Route exact path="/Articles">
              <ComingSoon />
            </Route>
            <Route exact path="/Contact">
              <ComingSoon />
            </Route>
          </Switch>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
