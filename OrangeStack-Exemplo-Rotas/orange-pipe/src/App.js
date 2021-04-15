import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Home from './components/Home';
import Pipe from './components/Pipe';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/pipe" component={Pipe}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  )
};