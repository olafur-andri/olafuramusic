import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PortfolioPage from '../PortfolioPage';
import NotFoundPage from '../NotFoundPage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect exact to="/portfolio" />
      </Route>

      <Route exact path="/portfolio" component={PortfolioPage} />

      <Route exact path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
