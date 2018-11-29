import React from 'react';
import { Link } from 'react-router-dom';
import { receiveQueue } from '../../actions/queue_actions';
import { fetchSongs } from '../../actions/song_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  fetchSongs: params => dispatch(fetchSongs(params)),
  receiveQueue: queue => dispatch(receiveQueue(queue))
});

const mapStateToProps = state => ({
  songs: state.entities.songs
});

class AlbumIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.addToQueue = this.addToQueue.bind(this);
  }

  processSong(song) {
    return {
      url: song.soundUrl,
      cover: song.photoUrl,
      songId: song.id,
      artist: {
        name: song.artistName,
        song: song.title
      }
    }
  }

  addToQueue() {
    this.props.fetchSongs({song_ids: this.props.album.song_ids}).then( () => {
      const formattedSongs = Object.values(this.props.songs).map( song => this.processSong(song))
      this.props.receiveQueue(formattedSongs);
    })
  }

  render() {
    const { album } = this.props;

    const artistNameTag = this.props.displayName === "false" ? (
      <h3></h3>
    ) : (
      <Link to={`/artist/${album.artistId}`}><h3 className="collection-creator">{album.artistName}</h3></Link>
    )

    return (
      <div className="collection-index-item">

        <div onClick={this.addToQueue} className="collection-image-container">
          <img className="collection-img" src={album.photoUrl}></img>
          <div className="image-overlay">
            <img className='collection-img-overlay' src={window.playBtn}></img>
          </div>
        </div>

        <Link to={`/album/${album.id}`}>
          <h3 className="collection-title">{album.title}</h3>
        </Link>
        { artistNameTag }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndexItem);
