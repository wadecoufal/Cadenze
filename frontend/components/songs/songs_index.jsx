import React from 'react';

class SongsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {

    const songs = this.props.songs ? (
      <ul className="song-rows" >
        {this.props.songs.map( song => {
          return (
            <div className="song-index-item">
              <div className="song-title-duration">
                <h4>{song.title}</h4>
                <h4>{song.duration}</h4>
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
