import React from 'react';
import SongIndexItem from './song_index_item';


class SongsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.addToQueue = this.addToQueue.bind(this);
  }

  componentDidMount() {
    if (this.props.searchQuery) {
      this.props.fetchSongs({search_query: this.props.searchQuery});
    } else if (this.props.songIds && this.props.songIds.length === 0) {
      this.props.fetchSongs({song_ids: "NoSongsHere"});
    } else if (this.props.songIds) {
      this.props.fetchSongs({song_ids: this.props.songIds});
    } else {
      this.props.fetchSongs();
    }

    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(34, 79, 107), rgb(6, 15, 20))'
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchQuery != this.props.searchQuery) {
      this.props.fetchSongs({search_query: newProps.searchQuery});
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
    this.formatDuration()

    const songs = this.props.songs ? (
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
      <div>
        No songs to see here
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
