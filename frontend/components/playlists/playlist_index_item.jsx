import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  titleInitials() {
    return this.props.playlist.title.split(' ')
      .map( word => word[0].toUpperCase()).join('')
  }

  render() {
    const { playlist } = this.props;

    return (
      <Link to={`/playlist/${playlist.id}`} className="collection-index-item">

        <div className="collection-image-container">
          <div className="playlist-img">
            <h4 className="playlist-img-title">{this.titleInitials()}</h4>
          </div>
          <div className="image-overlay">
          </div>
        </div>

        <h3 className="collection-title">{playlist.title}</h3>
        <h3 className="collection-creator">{playlist.user.username}</h3>
      </Link>
    )
  }

}

export default PlaylistIndexItem;
