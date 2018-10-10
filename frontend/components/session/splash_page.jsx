import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {

  render() {
    return (
      <div className="splash-page">
        <header className="splash-header">

          <div className="logo">
            <img src="/assets/Spotify_Icon_RGB_White.png"></img>
            <h1>Cadenze</h1>
          </div>

          <nav className="splash-session-buttons">
            <Link className="splash-session-link contact" to="">Github</Link>
            <Link className="splash-session-link contact" to="">LinkedIn</Link>

            <p className="separator">|</p>

            <Link className="splash-session-link" to="/signup">Sign Up</Link>
            <Link className="splash-session-link" to="/login">Log In</Link>
          </nav>
        </header>

        <main>
          <div className="splash-content">
            <h1>Music for everyone.</h1>
            <h4>Millions of songs. No credit card needed.</h4>
            <button>DEMO LOGIN</button>
          </div>

        </main>

        <footer>
        </footer>

      </div>
    )
  }

}

export default SplashPage;
