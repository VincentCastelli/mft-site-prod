import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Book from './Book';
import About from './About';
import Resources from './Resources';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/book" component={Book} />
    <Route exact path="/about" component={About} />
    <Route exact path="/resources" component={Resources} />
  </Switch>
);

export default Main;
