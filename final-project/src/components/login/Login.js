import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid main d-flex justify-content-center align-items-center">
        <div className="login-wrapper">
          <div className="header">
            <h4 style={{ fontWeight: 700 }}>Login</h4>
          </div>
          <label className="label-input mt-2">Username</label>
          <div className="input-group">
            <div className="input-group-prepend prepend">
              <i className="fas fa-user"></i>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="username"
            />
          </div>
          <label className="label-input mt-2">Password</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend prepend">
              <i className="fas fa-lock"></i>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
            />
          </div>
          <div className="d-flex justify-content-end">
            <span>
              <a href="#" className="link">
                Forgot your password?
              </a>
            </span>
          </div>
          <div className="my-2 p-2 button-login">LOGIN</div>
          <div className="text-center mt-5">
            <span style={{ fontWeight: 600 }}>
              Don't have an account? <a href="#">Sign up</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
