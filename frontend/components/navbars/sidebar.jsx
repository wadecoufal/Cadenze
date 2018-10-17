import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
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
          <NavLink className="link" activeClassName="active-sidebar-link" to="/search"><i className="sidebar-icon fas fa-search"></i>Search</NavLink>
          <NavLink activeClassName="active-sidebar-link" className="link" to="/browse"><i className="sidebar-icon fas fa-home"></i>Home</NavLink>
          <NavLink activeClassName="active-sidebar-link" className="link" to="/collection"><i className="sidebar-icon fas fa-book-reader"></i>Your Library</NavLink>
        </ul>



        <div className="user-tag">
          <h5><i className="user-icon far fa-user"></i>{this.props.currUser.username}</h5>
          <button className="sidebar-logout" onClick={this.props.logout}>Log Out</button>
        </div>

      </div>
    )
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
