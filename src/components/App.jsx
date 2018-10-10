import React from 'react';
import { Link } from 'react-router-dom';

import Main from './Main';

const App = () => {
  return (
    <div>
      <header className="site-header group">
        <h1>MFT 4 ME</h1>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/book">Book</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </nav>
        <div className="credentials">
          <a href="none">Sign up</a>
          /
          <a href="none">Login</a>
        </div>
      </header>
      <main>
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
