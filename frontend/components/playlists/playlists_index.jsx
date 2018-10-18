import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import { ScaleLoader } from 'react-spinners';

class PlaylistsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    if (this.props.searchQuery) {
      this.props.fetchPlaylists({search_query: this.props.searchQuery})
        .then( () => this.setState({loading: false}));
    } else if (this.props.followedPlaylistIds && this.props.followedPlaylistIds.length === 0) {
      this.props.fetchPlaylists({followed_playlist_ids: "NoPlaylistsHere",
      curr_user_id: this.props.currUserId}).then( () => this.setState({loading: false}));
    } else if (this.props.followedPlaylistIds) {
      this.props.fetchPlaylists({followed_playlist_ids: this.props.followedPlaylistIds,
      curr_user_id: this.props.currUserId}).then( () => this.setState({loading: false}));
    } else {
      this.props.fetchPlaylists()
        .then( () => this.setState({loading: false}));
    }
    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(#8e2500, #26004c)'
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchQuery != this.props.searchQuery) {
      this.props.fetchPlaylists({search_query: newProps.searchQuery})
        .then( () => this.setState({loading: false}));
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
        <ScaleLoader
          sizeUnit={"px"}
          height={150}
          width={7}
          size={150}
          color={'#1db954'}
          loading={this.state.loading}
        />
      </div>
      )
    }

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
