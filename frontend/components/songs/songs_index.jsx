import React from 'react';
import SongIndexItem from './song_index_item';
import { ScaleLoader } from 'react-spinners';

class SongsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.addToQueue = this.addToQueue.bind(this);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {

    if (this.props.searchQuery) {
      this.props.fetchSongs({search_query: this.props.searchQuery})
        .then( () => setTimeout(() => this.setState({loading: false}), 1000));
    } else if (this.props.songIds && this.props.songIds.length === 0) {
      this.props.fetchSongs({song_ids: "NoSongsHere"})
        .then( () => setTimeout(() => this.setState({loading: false}), 1000));
    } else if (this.props.songIds) {
      this.props.fetchSongs({song_ids: this.props.songIds})
        .then( () => setTimeout(() => this.setState({loading: false}), 1000));
    } else {
      this.props.fetchSongs()
        .then( () => setTimeout(() => this.setState({loading: false}), 1000));
    }

    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(34, 79, 107), rgb(6, 15, 20))'
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchQuery != this.props.searchQuery) {
      this.props.fetchSongs({search_query: newProps.searchQuery})
        .then( () => setTimeout(() => this.setState({loading: false}), 1000));
    }
  }

  formatDuration() {
    this.props.songs.forEach( song => {
      let seconds = song.duration%60;
      let minutes = Math.floor(song.duration/60);
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      song.durationStr = `${minutes}:${seconds}`
    })
  }

  addToQueue(songId) {
    let startIndex = 0;
    for (let i = 0; i < this.props.songs.length; i++) {
      if (this.props.songs[i].id === songId) {
        startIndex = i;
      }
    }
    const queueSongs = this.props.songs.slice(startIndex);
    const formattedQueueSongs = queueSongs.map( song => this.processSongInfoForQueue(song));
    this.props.receiveQueue(formattedQueueSongs);
  }

  processSongInfoForQueue(song) {
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

  songIsFavorited(songId) {
    for (let i = 0; i < this.props.follows.length; i++) {
      if (this.props.follows[i].followee_type === 'song'
          && this.props.follows[i].followee_id === songId) {
            return true
          }
    }
    return false;
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
        <ScaleLoader
          sizeUnit={"px"}
          height={150}
          width={7}
          size={150}
          color={'#1db954'}
          loading={this.state.loading}
        />
      </div>
      )
    }

    this.formatDuration()

    const songs = this.props.songs.length > 0 ? (
      <ul className="song-rows" >
        {this.props.songs.map( song => {
          return (
            <SongIndexItem
              key={song.id}
              song={song}
              favorited={this.songIsFavorited(song.id)}
              addToQueue={this.addToQueue}/>
          )
        })}
      </ul>
    ) : (
      <div className="no-results">
        Nothing to see here...
      </div>
    )

    return (
      <div className="songs-index">
        {songs}
      </div>
    )
  }
}

export default SongsIndex;
