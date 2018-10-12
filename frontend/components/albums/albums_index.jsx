import React from 'react';

class AlbumsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
    document.getElementById('main-content').style.backgroundImage =
      'linear-gradient(rgb(41, 44, 44), rgb(9, 10, 10))'

  }

  render() {

    const albums = this.props.albums ? (
      <ul className="album-rows" >
        {this.props.albums.map( album => {
          return (
            <div className="album-index-item">
              <img className="album-img" src={album.photoUrl}></img>
              <h3 className="album-title">{album.title}</h3>
              <h3 className="album-artist">{album.artist.name}</h3>
            </div>
          )
        })}
      </ul>
    ) : (
      <div>
        No albums to see here
      </div>
    )

    return (
      <div className="albums-index">
        {albums}
      </div>
    )
  }

}

export default AlbumsIndex;
