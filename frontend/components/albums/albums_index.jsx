import React from 'react';
import AlbumIndexItem from './album_index_item';
import { ScaleLoader } from 'react-spinners';

class AlbumsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

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
      this.props.fetchAlbums({search_query: newProps.searchQuery}).then( () => this.setState({loading: false});
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
        <ScaleLoader
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
      )
    }

    const albums = this.props.albums ? (
      <ul className="item-rows" >
        {this.props.albums.map( album => {
          return (
            <AlbumIndexItem key={album.id} album={album} displayName={this.props.displayName} />
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
