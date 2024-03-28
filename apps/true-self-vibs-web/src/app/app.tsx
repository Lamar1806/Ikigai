import Navbar from '../components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from '../pages/home/home';
import Footer from '../components/footer/footer';

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
