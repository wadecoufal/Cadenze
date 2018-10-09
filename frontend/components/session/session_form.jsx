import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the SESSION FORM</h1>
        <h2>Specifically, the {this.props.formType} page</h2>
      </div>
    )
  }

}

export default SessionForm;
