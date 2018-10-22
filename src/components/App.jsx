import React from 'react';
import { NavLink } from 'react-router-dom';

import Main from './Main';

const App = () => {
  return (
    <div>
      <header className="site-header group">
        <h1>MFT 4 ME</h1>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink activeClassName="current" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" exact to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" exact to="/resources">Resources</NavLink>
            </li>
          </ul>
        </nav>
        <NavLink activeClassName="credentials" exact to="/book">
          <button type="button">Book an appointment</button>
        </NavLink>
      </header>
      <main className="main-content">
        <Main />
      </main>
      <footer className="site-footer">
        <p>
          MFT 4 ME &copy; 2018
        </p>
      </footer>
    </div>
  );
};

export default App;
