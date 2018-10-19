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
        .then( () => setTimeout(() => this.setState({loading: false}), 1000));
    } else if (this.props.followedPlaylistIds && this.props.followedPlaylistIds.length === 0) {
      this.props.fetchPlaylists({followed_playlist_ids: "NoPlaylistsHere",
      curr_user_id: this.props.currUserId})
      .then( () => setTimeout(() => this.setState({loading: false}), 1000));
    } else if (this.props.followedPlaylistIds) {
      this.props.fetchPlaylists({followed_playlist_ids: this.props.followedPlaylistIds,
      curr_user_id: this.props.currUserId})
      .then( () => setTimeout(() => this.setState({loading: false}), 1000));
    } else {
      this.props.fetchPlaylists()
        .then( () => setTimeout(() => this.setState({loading: false}), 1000));
    }
    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(#8e2500, #26004c)'
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchQuery != this.props.searchQuery) {
      this.props.fetchPlaylists({search_query: newProps.searchQuery})
        .then( () => setTimeout(() => this.setState({loading: false}), 1000));
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

    const playlists = this.props.playlists.length > 0 ? (
      <ul className="item-rows" >
        {this.props.playlists.map( playlist => {
          return (
            <PlaylistIndexItem key={playlist.id} playlist={playlist} />
          )
        })}
      </ul>
    ) : (
      <div className="no-results">
        Nothing to see here...
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
