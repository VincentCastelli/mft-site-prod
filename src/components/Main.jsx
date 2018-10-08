import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Book from './Book';
import About from './About';
import Contact from './Contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/book" component={Book} />
    <Route path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
