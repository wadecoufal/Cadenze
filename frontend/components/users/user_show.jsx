import React from 'react';

import PlaylistIndexContainer from '../playlists/playlists_index_container';
import Navbar from '../navbars/navbar';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
      .then( () => this.setState({loading: false }))
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <div className="user-show">
        <Navbar />
        <PlaylistIndexContainer followedPlaylistIds={this.props.user.playlist_ids} />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
