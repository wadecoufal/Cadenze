import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumsIndexContainer from '../albums/albums_index_container';
import SongsIndexContainer from '../songs/songs_index_container';
import { fetchArtist } from '../../actions/artist_actions';

import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  return {artist: state.entities.artists[ownProps.match.params.artistId],
  follows: Object.values(state.entities.follows)}
};

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: id => dispatch(deleteFollow(id))
})

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    document.getElementById('main-content-2').style.backgroundImage =
    'linear-gradient(#ef1d4f, #rgb(24, 26, 26))'
    this.props.fetchArtist(this.props.match.params.artistId)
      .then( () => this.setState({loading: false}));
  }

  userFollowingArtist() {
    let i = 0;
    while (i < this.props.follows.length) {
      if (this.props.follows[i].followee_id === this.props.artist.id
        && this.props.follows[i].followee_type === 'artist') {
          return true;
        }
      i++;
    }
    return false;
  }

  handleDelete() {
    let deleteFollowId;
    let i = 0;
    while (i < this.props.follows.length) {
      if (this.props.follows[i].followee_id === this.props.artist.id
        && this.props.follows[i].followee_type === 'artist') {
        deleteFollowId = this.props.follows[i].id;
      }
      i++;
    }
    this.props.deleteFollow(deleteFollowId);
  }

  handleFollow() {
    this.props.createFollow({
      followee_id: this.props.artist.id,
      followee_type: 'artist'
    })
  }


  render() {
    if (this.state.loading) {
      return null;
    }

    const followBtn = this.userFollowingArtist() ? (
      <button
        className="follow-button"
        onClick={this.handleDelete}
        >UNFOLLOW</button>
    ) : (
      <button
        className="follow-button"
        onClick={this.handleFollow}
        >FOLLOW</button>
    )

    const artist = this.props.artist ? (
      <div className="artist-show">

        <div className="artist-show-header">
          <div className="artist-image-name-container">
            <img src={this.props.artist.photoUrl} className="artist-show-image"></img>
            <div>
              <h1>{this.props.artist.name}</h1>
              { followBtn }
            </div>
          </div>
        </div>


        <div className="artists-albums">
          <h1>Albums</h1>
          <AlbumsIndexContainer albumIds={this.props.artist.album_ids} displayName={"false"}/>
        </div>

        <div className="artists-songs">
          <h1>Songs</h1>
          <SongsIndexContainer songIds={this.props.artist.song_ids} />
        </div>

      </div>
    ) : (
      <h4>No artist to show here</h4>
    )

    return (
      <div>
        {artist}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistShow));
