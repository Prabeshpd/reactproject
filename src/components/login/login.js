import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleFormSubmit.bind(this);
  }

  onChange(e) {
    let value = e.target.value;
    let target = e.target.name;
    let formData = Object.assign({}, this.state.formData, { [target]: value });
    this.setState({ [target]: value, formData });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.refs.frmLogin.reset();
  }

  render() {
    return (
      <div className="container">
        <div className="header">Login Form</div>
        <div className="form-container">
          <form className="form" ref="frmLogin" onSubmit={this.handleFormSubmit}>
            <label className="label">Username:</label>
            <input
              type="text"
              ref="userName"
              name="username"
              onChange={this.onChange}
              value={this.state.username}
            />
            <label className="label">Password:</label>
            <input
              type="password"
              ref="password"
              name="password"
              onChange={this.onChange}
              value={this.state.password}
            />
            <button type="submit" className="submit"></button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
