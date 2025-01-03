import Navbar from '../components/navbar/navbar';
import { Component, ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import { Home } from '../pages/home/home';
import Footer from '../components/footer/footer';
import UnderConstructionModal from '../components/under-construction-modal/under-construction-modal';
import TherapistsPage from '../pages/therapists-page/therapists-page';
import styled from '@emotion/styled';
import TherapistDetailsPage from '../pages/therapist-details-page/therapist-details-page';
import WhatBringsYouHerePage from '../pages/what-brings-you-here-page/what-brings-you-here-page';
import ComingSoon from '../components/coming-soon/coming-soon';
import MembershipsPage from '../pages/memberships-page/memberships-page';
import CheckOutMembership from '../pages/check-out-membership/check-out-membership';
import Login from '../pages/login/login';
import SignUp from '../pages/sign-up/sign-up';
import PaymentCompletion from '../components/payment-completion/payment-completion';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

// Assuming you have a function to check if the user is logged in
const isAuthenticated = () => {
  // Implement your authentication logic here
  // For example, check if there's a token in localStorage
  return localStorage.getItem('trueSelfVibsUser') !== null;
};

// Define your protected routes component
interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export function App() {
  return (
    <Router>
      <AppContainer>
        <UnderConstructionModal />
        <Navbar />
        <ContentWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/memberships" component={MembershipsPage} />
            <ProtectedRoute
              exact
              isAuthenticated={isAuthenticated()}
              path="/memberships/:id"
              component={CheckOutMembership}
            />
            <Route path="/completion" component={PaymentCompletion} />
            <ProtectedRoute
              isAuthenticated={isAuthenticated()}
              path="/WhatBringsYouHere"
              component={WhatBringsYouHerePage}
            />
            <ProtectedRoute
              exact
              isAuthenticated={isAuthenticated()}
              path="/therapists"
              component={TherapistsPage}
            />
            <ProtectedRoute
              exact
              isAuthenticated={isAuthenticated()}
              path="/therapists/:id"
              component={TherapistDetailsPage}
            />
            <ProtectedRoute
              exact
              isAuthenticated={isAuthenticated()}
              path="/doctors"
              component={ComingSoon}
            />
            <ProtectedRoute
              exact
              isAuthenticated={isAuthenticated()}
              path="/videos"
              component={ComingSoon}
            />
            <ProtectedRoute
              exact
              isAuthenticated={isAuthenticated()}
              path="/apps"
              component={ComingSoon}
            />
            <ProtectedRoute
              exact
              isAuthenticated={isAuthenticated()}
              path="/Articles"
              component={ComingSoon}
            />
            <ProtectedRoute
              exact
              isAuthenticated={isAuthenticated()}
              path="/Contact"
              component={ComingSoon}
            />
          </Switch>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
