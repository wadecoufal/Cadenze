import React from 'react';
import Navbar from '../navbars/navbar';

import { Route, Redirect, Switch } from 'react-router-dom';

import AlbumsIndexContainer from '../albums/albums_index_container';
import ArtistsIndexContainer from '../artists/artists_index_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import SongsIndexContainer from '../songs/songs_index_container';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  componentDidMount() {
    document.getElementById('main-content-2').style.backgroundImage =
      'linear-gradient(rgb(4, 6, 81), rgb(0, 0, 22))'
  }

  handleChange() {
    return (e) => {
      this.setState({query: e.target.value})
    };
  }

  render() {
    const page = 'search';

    const renderContent = this.state.query.length > 0 ? (
      <div>
        <div className="search-nav-and-results">
          <Navbar page={page} />
          <Switch>
            <Route path="/search/albums" render={ () =>
                <AlbumsIndexContainer
                  searchQuery={this.state.query} /> } />

            <Route path="/search/artists" render={ () =>
                <ArtistsIndexContainer
                  searchQuery={this.state.query} /> } />

            <Route path="/search/playlists" render={ () =>
                <PlaylistsIndexContainer
                  searchQuery={this.state.query} /> } />

            <Route path="/search/songs" render={ () =>
                <SongsIndexContainer
                  searchQuery={this.state.query} /> } />
            <Redirect to="/search/albums" />
          </Switch>
        </div>
      </div>
    ) : (
      <div>
        <h1>Search Cadenze</h1>
        <h4>Find your favorite songs, artists, albums, podcasts and playlists.</h4>
      </div>
    )

    return (
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            value={this.state.query}
            placeholder="Start typing..."
            onChange={this.handleChange()}
            ></input>
        </form>
        { renderContent }
      </div>
    )
  }

}

export default Search;
