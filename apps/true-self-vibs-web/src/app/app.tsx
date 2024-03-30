import Navbar from '../components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import Footer from '../components/footer/footer';
import UnderConstructionModal from '../components/under-construction-modal/under-construction-modal';

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <UnderConstructionModal />
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route path="/therapists">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
