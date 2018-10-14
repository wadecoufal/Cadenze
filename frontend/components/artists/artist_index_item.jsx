import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { artist } = this.props;

    return (
      <Link to={`/artist/${artist.id}`} className="artist-index-item">
        <div className="artist-image-container">
          <img className='artist-img' src={artist.photoUrl}></img>
          <div className="artist-overlay">
            <img className="artist-img-overlay" src={window.playBtn}></img>
          </div>
        </div>


        <h3 className='artist-name'>{artist.name}</h3>
      </Link>
    )
  }

}

export default ArtistIndexItem;
