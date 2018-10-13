import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(41, 44, 44), rgb(9, 10, 10))'

  }

  render() {

    const albums = this.props.albums ? (
      <ul className="album-rows" >
        {this.props.albums.map( album => {
          return (
            <AlbumIndexItem album={album} />
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
