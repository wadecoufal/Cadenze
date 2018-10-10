import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  render() {
    const submitButtonText = this.props.formType === "login" ? (
      "Log In" ) : ( "Sign Up" )

    const emailField = this.props.formType === "signup" ? (
        <input type="text"
          onChange={this.handleChange('email')}
          value={this.state.email}
          placeholder="Email"></input>
      ) : (
        ""
      )

    const linkToOther = this.props.formType === "login" ? (
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    ) : (
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    )

    return (
      <div className="session">
        <div className="session-content">
          <div className="session-header">
            <div className="logo">
              <img src="/assets/Spotify_Icon_RGB_Black.png"></img>
              <h1>Cadenze</h1>
            </div>
          </div>

          <div className="session-form">
            <div>
              <button>DEMO LOGIN</button>
              <div className='divider'></div>
            </div>

            <form className="session-form"  onSubmit={this.handleSubmit}>
              {emailField}

              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange('username')}
                placeholder="Username"
              ></input>

              <input type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder="Password">
              </input>

              <button>{submitButtonText}</button>
            </form>

            {linkToOther}
          </div>
        </div>

      </div>
    )
  }

}

export default SessionForm;
