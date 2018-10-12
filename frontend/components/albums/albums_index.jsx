import React from 'react';

class AlbumsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {

    const albums = this.props.albums ? (
      <ul>
        {this.props.albums.map( album => {
          return (
            <div>
              <h3>{album.title}</h3>
              <img className="album-img" src={album.photoUrl}></img>
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
