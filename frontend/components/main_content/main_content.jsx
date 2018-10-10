import React from 'react';

class MainContent extends React.Component {
  render () {
    return (
      <div>
        <h1>This is the main component</h1>
        <button onClick={this.props.logout} >Log Out</button>
      </div>
    )
  }
}

export default MainContent;
