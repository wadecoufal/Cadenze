import React from 'react';
import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = state => ({
  follows: Object.values(state.entities.follows)
});

const mapDispatchToProps = dispatch => ({
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

class SongFavoriteButton extends React.Component {

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite() {
    this.props.createFollow({
      followee_id: this.props.songId,
      followee_type: 'song'
    })
  }

  handleDelete() {
    let deleteFollowId;
    let i = 0;
    while (i < this.props.follows.length) {
      if (this.props.follows[i].followee_id === this.props.songId
        && this.props.follows[i].followee_type === 'song') {
        deleteFollowId = this.props.follows[i].id;
      }
      i++;
    }
    this.props.deleteFollow(deleteFollowId);
  }

  favorited() {
    for (let i = 0; i < this.props.follows.length; i++) {
      if (this.props.follows[i].followee_id === this.props.songId
          && this.props.follows[i].followee_type === 'song') {
        return true;
      }
    }
    return false;
  }

  render() {
    const songFavoriteBtn = this.favorited() ? (
      <button
        className="song-favorite-button lock"
        onClick={this.handleDelete}>
        <i className="fas fa-check icon-unlock"></i>
        <i className="fas fa-times icon-lock"></i>
      </button>
    ) : (
      <button
        className="song-favorite-button"
        onClick={this.handleFavorite}
        ><i className="fas fa-plus"></i>
      </button>
    )

    return (
      <div>
        { songFavoriteBtn }
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SongFavoriteButton);
