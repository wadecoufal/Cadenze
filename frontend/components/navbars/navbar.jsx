import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {


  render() {

    return (
      <ul className="nav-bar">

        <NavLink className="link" activeClassName="active-nav-link" to="/browse/ablums">ALBUMS</NavLink>
        <NavLink className="link" activeClassName="active-nav-link" to="/browse/artists">ARTISTS</NavLink>
        <NavLink className="link" activeClassName="active-nav-link" to="/browse/playlists">PLAYLISTS</NavLink>
        <NavLink className="link" activeClassName="active-nav-link" to="/browse/songs">SONGS</NavLink>

      </ul>
    )
  }

}

export default NavBar;
