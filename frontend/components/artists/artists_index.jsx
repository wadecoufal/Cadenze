import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtists();
    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(145, 0, 80), rgb(26, 1, 14))'
  }

  render() {
    const artists = this.props.artists ? (
      <ul className="artist-rows">
        {this.props.artists.map( artist => {
          return (
            <ArtistIndexItem artist={artist} />
          )
        })}
      </ul>
    ) : (
      <div>
        No artists to see here
      </div>
    )

    return (
      <div className="artists-index">
        {artists}
      </div>
    )
  }

}

export default ArtistsIndex;
