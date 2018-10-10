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

    const errors = this.props.errors.length > 0 ? (
      <ul className="session-errors">
        {this.props.errors.map( error => {
          return <li>{error}</li>
        })}
      </ul>
    ) : ("")

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
                <Link className="splash-page-link" to="/">
                  <img src="/assets/Spotify_Icon_RGB_Black.png"></img>
                </Link>
                <Link className="splash-page-link" to="/">
                  <h1>Cadenze</h1>
                </Link>
              </div>

          </div>

          <div className="session-form">

            <form className="session-form"  onSubmit={this.handleSubmit}>
              <button type="button"
                className="demo-login"
                onClick={this.props.demoLogin}
                >DEMO LOGIN</button>
              <div className='divider'><strong>OR</strong></div>

              {errors}

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

              <button type="submit" >{submitButtonText}</button>
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
