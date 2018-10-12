import React from 'react';

class SongsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
    document.getElementById('main-content').style.backgroundImage =
      'linear-gradient(rgb(34, 79, 107), rgb(6, 15, 20))'
  }

  formatDuration() {
    this.props.songs.forEach( song => {
      const seconds = song.duration%60;
      const minutes = seconds/60;
      song.durationStr = `${seconds}:${minutes}`
    })
  }

  render() {
    this.formatDuration()

    const songs = this.props.songs ? (
      <ul className="song-rows" >
        {this.props.songs.map( song => {
          return (
            <div className="song-index-item">
              <div className="song-title-duration">
                <h4>{song.title}</h4>
                <h4>{song.durationStr}</h4>
              </div>
              <div className="song-artist-album">
                <h4>{song.artist.name}</h4>
                <h4>{song.album.title}</h4>
              </div>
            </div>
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
