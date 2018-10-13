import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { album } = this.props;
    return (
      <Link to={`/album/${album.id}`} className="album-index-item">

        <div className="album-image-container">
          <img className="album-img" src={album.photoUrl}></img>
          <div className="image-overlay">
            <img className='album-img-overlay' src={window.playBtn}></img>
          </div>
        </div>

        <h3 className="album-title">{album.title}</h3>
        <h3 className="album-artist">{album.artist.name}</h3>
      </Link>
    )
  }

}

export default AlbumIndexItem;
