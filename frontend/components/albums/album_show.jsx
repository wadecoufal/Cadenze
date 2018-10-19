import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import SongsIndexContainer from '../songs/songs_index_container';
import { fetchAlbum } from '../../actions/album_actions';

import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
    follows: Object.values(state.entities.follows)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: id => dispatch(deleteFollow(id))
})

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.album;
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId).then( () => this.setState({loading: false}));
  }

  userFavoritedAlbum() {
    let i = 0;
    while (i < this.props.follows.length) {
      if (this.props.follows[i].followee_id === this.props.album.id
        && this.props.follows[i].followee_type === 'album') {
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
      if (this.props.follows[i].followee_id === this.props.album.id
        && this.props.follows[i].followee_type === 'album') {
        deleteFollowId = this.props.follows[i].id;
      }
      i++;
    }
    this.props.deleteFollow(deleteFollowId);
  }

  handleFavorite() {
    this.props.createFollow({
      followee_id: this.props.album.id,
      followee_type: 'album'
    })
  }

  render() {

    if (this.state.loading) {
      return null;
    }

    const favoriteBtn = this.userFavoritedAlbum() ? (
      <button
        className="follow-button"
        onClick={this.handleDelete}
        >REMOVE FROM COLLECTION</button>
    ) : (
      <button
        className="follow-button"
        onClick={this.handleFavorite}
        >ADD TO COLLECTION</button>
    )

    const album = this.props.album ? (
      <div className="collection-show">
        <div className="collection-img-info">
          <img className="collection-image" src={this.props.album.photoUrl}></img>
          <div className="collection-info">
            <h3>{this.props.album.title}</h3>
            <Link className="collection-artist-info-link" to={`/artist/${this.props.album.artistId}`}>{this.props.album.artistName}</Link>
            {favoriteBtn}
          </div>
        </div>
        <div className="collection-songs album-show-songs">
          <SongsIndexContainer songIds={this.props.album.song_ids}/>
        </div>
      </div>
    ) : (
      <h4>No album to show here</h4>
    )

    return (
      <div>
        {album}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumShow));
