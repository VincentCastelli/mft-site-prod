import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Main from './Main';

const App = () => {
  return (
    <div>
      <header className="site-header group">
        <h1>Amanda Castelli | MFT</h1>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink activeClassName="current" title="home" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" title="about" exact to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" title="services" exact to="/services">Services</NavLink>
            </li>
          </ul>
        </nav>
        <Button variant="contained" color="primary" href="/book">Request an appointment</Button>
      </header>
      <main className="main-content">
        <Main />
      </main>
      <footer className="site-footer">
        <p>
          Amanda Castelli &copy; 2020
        </p>
      </footer>
    </div>
  );
};

export default App;
