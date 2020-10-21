import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserDetails from './containers/UserDetails';
import UserRepositories from './containers/UserRepositories';
import Navigation from './components/Menu';

const App = () => (
  <Router>
    <Navigation />
    <div style={{ marginLeft: 150 }}>
      <Switch>
        <Route exact path="/me">
          <UserDetails />
        </Route>
        <Route exact path="/me/repositories">
          <UserRepositories />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
