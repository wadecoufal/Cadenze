import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumsIndex extends React.Component {

  componentDidMount () {
    if (this.props.searchQuery) {
      this.props.fetchAlbums({search_query: this.props.searchQuery});
    } else if (this.props.albumIds && this.props.albumIds.length === 0) {
      this.props.fetchAlbums({album_ids: "NoAlbumsHere"});
    } else if (this.props.albumIds) {
      this.props.fetchAlbums({album_ids: this.props.albumIds});
    } else {
      this.props.fetchAlbums();
    }

    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(41, 44, 44), rgb(9, 10, 10))'
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchQuery != this.props.searchQuery) {
      this.props.fetchAlbums({search_query: newProps.searchQuery});
    }
  }

  render() {
    const albums = this.props.albums ? (
      <ul className="item-rows" >
        {this.props.albums.map( album => {
          return (
            <AlbumIndexItem key={album.id} album={album} />
          )
        })}
      </ul>
    ) : (
      <div>
        No albums to see here
      </div>
    )

    return (
      <div className="items-index">
        {albums}
      </div>
    )
  }

}

export default AlbumsIndex;
