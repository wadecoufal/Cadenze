import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {

  render() {
    return (
      <div className="splash-page">
        <header className="splash-header">
          <p className="logo">Logo goes here</p>
          <nav className="splash-session-buttons">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </nav>
        </header>

        <main>
          <h1>Music for Everyone</h1>
          <h4>Millions of songs. No credit card needed.</h4>
          <button>Demo Login</button>
        </main>
      </div>
    )
  }

}

export default SplashPage;
