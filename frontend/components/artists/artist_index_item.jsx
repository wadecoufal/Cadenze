import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { artist } = this.props;

    return (
      <div className="artist-index-item">

        <img className='artist-img' src={artist.photoUrl}></img>


        <h3 className='artist-name'>{artist.name}</h3>
      </div>
    )
  }

}

export default ArtistIndexItem;
