import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devFirstName: 'Vincent',
      devLastName: 'Castelli',
      client: 'customer',
    };
  }

  render() {
    const { devFirstName, devLastName, client } = this.state;
    return (
      <div>
        <header className="site-header group">
          <h1>MFT 4 ME</h1>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="none">Home</a>
              </li>
              <li>
                <a href="none">Book</a>
              </li>
              <li>
                <a href="none">About</a>
              </li>
              <li>
                <a href="none">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Home
            devFirstName={devFirstName}
            devLastName={devLastName}
          />
          <About
            client={client}
          />
        </main>
        <footer>
          <p>
            MFT 4 ME &copy; 2018
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
