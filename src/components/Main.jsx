import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Book from './Book';
import About from './About';
import Services from './Services';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/book" component={Book} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
  </Switch>
);

export default Main;
