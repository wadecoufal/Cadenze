import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { playlist } = this.props;

    return (
      <Link to={`/playlist/${playlist.id}`} className="collection-index-item">

        <div className="collection-image-container">
          <img className="collection-img"></img>
          <div className="image-overlay">
            <img className='collection-img-overlay' src={window.playBtn}></img>
          </div>
        </div>

        <h3 className="collection-title">{playlist.title}</h3>
        <h3 className="collection-creator">{playlist.user.username}</h3>
      </Link>
    )
  }

}

export default PlaylistIndexItem;
