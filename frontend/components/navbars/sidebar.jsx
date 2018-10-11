import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Sidebar extends React.Component {

  render () {
    return (
      <div className="sidebar">

        // logo
        <div className="logo">
          <Link className="splash-page-link" to="/">
            <img src={window.blackLogoURL}></img>
          </Link>
          <Link className="splash-page-link" to="/">
            <h1>Cadenze</h1>
          </Link>
        </div>

        // search, home, your library

        <ul>
          <NavLink to="/search/results">Search</NavLink>
          <NavLink to="/browse/featured">Home</NavLink>
          <NavLink to="/collection/playlists">Your Library</NavLink>
        </ul>

        // user profile image / name

      </div>
    )
  }

}

export default Sidebar;
