import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devFirstName: 'Vincent',
      devLastName: 'Castelli',
    };
  }

  render() {
    const { devFirstName, devLastName } = this.state;
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
          <p>{`This site is under construction by ${devFirstName} ${devLastName}`}</p>
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
