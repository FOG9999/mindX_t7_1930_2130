import React, { Component } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authService } from "../../apis/AuthService";
import { Spin, notification } from "antd";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false,
    loading: false,
  };

  onChangeUsername = (evnt) => {
    this.setState({ username: evnt.target.value });
  };

  onChangePassword = (evnt) => {
    this.setState({ password: evnt.target.value });
  };

  submit = () => {
    // let fakeUser = JSON.parse(localStorage.getItem("fakeUser"));
    // if (this.state.username !== fakeUser.username) {
    //   toast("Username does not exist!");
    // } else if (
    //   this.state.username === fakeUser.username &&
    //   this.state.password !== fakeUser.password
    // ) {
    //   toast("Password inputed is wrong!");
    // } else {
    this.setState({
      losding: true,
    });
    const { username, password } = this.state;
    authService.login(username, password, (res) => {
      if (res.error) {
        notification.error(res.errorMessage);
      } else {
        this.setState({
          loggedIn: true,
          loading: false,
        });
      }
    });
    // }
  };


  componentDidMount() {
    localStorage.setItem(
      "fakeUser",
      JSON.stringify({ username: "Snavy", password: "123456" })
    );
  }

  render() {
    return (
      <div className="container-fluid main d-flex justify-content-center align-items-center">
        <ToastContainer />
        <Spin spinning={this.state.loading} />
        {this.state.loggedIn ? <Navigate to="/home-page" /> : null}
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
              value={this.state.username}
              onChange={this.onChangeUsername}
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
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="d-flex justify-content-end">
            <span>
              <Link to="#" className="link">
                Forgot your password?
              </Link>
            </span>
          </div>
          <div className="my-2 p-2 button-login" onClick={this.submit}>
            LOGIN
          </div>
          <div className="text-center mt-5">
            <span style={{ fontWeight: 600 }}>
              Don't have an account? <Link to="/sign-up">Sign up</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
