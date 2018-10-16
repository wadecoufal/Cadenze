import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.searchQuery) {
      this.props.fetchPlaylists({search_query: this.props.searchQuery});
    } else if (this.props.followedPlaylistIds && this.props.followedPlaylistIds.length === 0) {
      this.props.fetchPlaylists({followed_playlist_ids: "NoPlaylistsHere",
      curr_user_id: this.props.currUserId})
    } else if (this.props.followedPlaylistIds) {
      this.props.fetchPlaylists({followed_playlist_ids: this.props.followedPlaylistIds,
      curr_user_id: this.props.currUserId})
    } else {
      this.props.fetchPlaylists();
    }
    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(4, 180, 44), rgb(9, 10, 10))'
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchQuery != this.props.searchQuery) {
      this.props.fetchPlaylists({search_query: newProps.searchQuery});
    }
  }

  render() {
    const playlists = this.props.playlists ? (
      <ul className="item-rows" >
        {this.props.playlists.map( playlist => {
          return (
            <PlaylistIndexItem key={playlist.id} playlist={playlist} />
          )
        })}
      </ul>
    ) : (
      <div>
        No playlists to see here
      </div>
    )

    return (
      <div className="items-index">
        {playlists}
      </div>
    )
  }

}

export default PlaylistsIndex;
