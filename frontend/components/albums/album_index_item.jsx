import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { album } = this.props;
    return (
      <Link to={`/album/${album.id}`} className="collection-index-item">

        <div className="collection-image-container">
          <img className="collection-img" src={album.photoUrl}></img>
          <div className="image-overlay">
            <img className='collection-img-overlay' src={window.playBtn}></img>
          </div>
        </div>

        <h3 className="collection-title">{album.title}</h3>
        <h3 className="collection-creator">{album.artist.name}</h3>
      </Link>
    )
  }

}

export default AlbumIndexItem;
