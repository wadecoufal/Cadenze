import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ul className="nav-bar">
        <div>
          <NavLink
            className="link"
            activeClassName="active-nav-link"
            to={`/${this.props.page}/albums`}
          >ALBUMS</NavLink>

          <NavLink
            className="link"
            activeClassName="active-nav-link"
            to={`/${this.props.page}/artists`}
          >ARTISTS</NavLink>

          <NavLink
            className="link"
            activeClassName="active-nav-link"
            to={`/${this.props.page}/playlists`}
          >PLAYLISTS</NavLink>

          <NavLink
            className="link"
            activeClassName="active-nav-link"
            to={`/${this.props.page}/songs`}
          >SONGS</NavLink>

        </div>
        <button className="new-playlist-btn">NEW PLAYLIST</button>

      </ul>
    )
  }

}

export default Navbar;
