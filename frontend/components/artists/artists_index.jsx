import React from 'react';

class ArtistsIndex extends React.Component {

  componentDidMount() {
    document.getElementById('main-content').style.backgroundImage =
      'linear-gradient(rgb(145, 0, 80), rgb(26, 1, 14))'
  }

  render() {
    return (
      <h1>This is the ArtistsIndex</h1>
    )
  }

}

export default ArtistsIndex;
