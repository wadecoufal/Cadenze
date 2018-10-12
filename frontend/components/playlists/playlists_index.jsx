import React from 'react';

class PlaylistsIndex extends React.Component {

  componentDidMount() {
    document.getElementById('main-content').style.backgroundImage =
      'linear-gradient(rgb(4, 180, 44), rgb(9, 10, 10))'
  }

  render() {
    return (
      <h1>This is the PlaylistsIndex</h1>
    )
  }

}

export default PlaylistsIndex;
