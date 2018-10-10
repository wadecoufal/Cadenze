import React from 'react';

class MainContent extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome, {}</h1>
        <button onClick={this.props.logout} >Log Out</button>
      </div>
    )
  }
}

export default MainContent;
