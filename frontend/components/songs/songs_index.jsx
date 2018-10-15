import React from 'react';
import SongIndexItem from './song_index_item';

class SongsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs({song_ids: this.props.songIds});
    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(34, 79, 107), rgb(6, 15, 20))'
  }

  formatDuration() {
    this.props.songs.forEach( song => {

      let seconds = song.duration%60;
      let minutes = Math.floor(song.duration/60);

      seconds = seconds < 10 ? `0${seconds}` : seconds;

      song.durationStr = `${minutes}:${seconds}`
    })
  }

  render() {
    this.formatDuration()

    const songs = this.props.songs ? (
      <ul className="song-rows" >
        {this.props.songs.map( song => {
          return (
            <SongIndexItem key={song.id} song={song} />
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
