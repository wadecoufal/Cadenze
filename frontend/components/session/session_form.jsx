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
      "LOG IN" ) : ( "SIGN UP" )

    const emailField = this.props.formType === "signup" ? (
        <input type="text"
          onChange={this.handleChange('email')}
          value={this.state.email}
          placeholder="Email"></input>
      ) : (
        ""
      )

    const linkToOther = this.props.formType === "login" ? (
      <p>Don't have an account? <Link className="link" to="/signup">Sign Up</Link></p>
    ) : (
      <p>Already have an account? <Link className="link" to="/login">Log In</Link></p>
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

            <form className="session-form"  onSubmit={this.handleSubmit}>
              <button className="demo-login">DEMO LOGIN</button>
              <div className='divider'><strong>OR</strong></div>


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

            <footer>If you would like to browse the site before creating an account,
              just hit the <span>'Demo Login'</span> button! You'll still be able to
            stream all your favorite music</footer>
          </div>
        </div>

      </div>
    )
  }

}

export default SessionForm;