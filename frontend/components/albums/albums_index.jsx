import React from 'react';
import AlbumIndexItem from './album_index_item';

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) )
};

class AlbumsIndex extends React.Component {
  componentDidMount () {
    this.props.fetchAlbums({album_ids: this.props.albumIds});
    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(41, 44, 44), rgb(9, 10, 10))'
  }

  componentWillReceiveProps(newProps) {
    if (newProps.albumsIds && !arrayEq(this.props.albumIds, newProps.albumIds)) {
      this.props.fetchAlbums({album_ids: newProps.albumIds});
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
