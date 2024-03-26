import { Navbar } from '../components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from '../pages/home/home';

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
