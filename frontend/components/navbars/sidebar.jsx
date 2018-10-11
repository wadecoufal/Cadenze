import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currUser: state.entities.users[state.session.id]
});

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="sidebar">

        <div className="logo">
          <Link className="splash-page-link" to="/browse/featured">
            <img src={window.whiteLogoURL}></img>
          </Link>
          <Link className="splash-page-link" to="/browse/featured">
            <h1>Cadenze</h1>
          </Link>
        </div>



        <ul className="sidebar-links">
          <NavLink className="link" to="/search/results">Search</NavLink>
          <NavLink className="link" to="/browse/featured">Home</NavLink>
          <NavLink className="link" to="/collection/playlists">Your Library</NavLink>
        </ul>



        <div className="user-tag">
          <img className="user-img" src={this.props.currUser.photoUrl}></img>
          <h5>{this.props.currUser.username}</h5>
        </div>

      </div>
    )
  }

}

export default connect(mapStateToProps)(Sidebar);
