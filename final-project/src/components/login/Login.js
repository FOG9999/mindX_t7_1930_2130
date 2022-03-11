import React, { Component } from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authService } from '../../apis/AuthService';
import { Spin, notification } from 'antd';
class Login extends Component {
  state = {
    username: '',
    password: '',
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
    this.setState({
      loading: true,
    });
    const { username, password } = this.state;
    authService.login(username, password, async (res) => {
      if (res.error) {
        toast.error(res.errorMessage);
        this.setState({
          loading: false,
        });
      } else {
        let data = await res; // res is a Promise
        this.setState({
          loggedIn: true,
          loading: false,
        });
      }
    });
  };

  render() {
    return (
      <Spin spinning={this.state.loading} size="default">
        <div className="container-fluid main d-flex justify-content-center align-items-center">
          <ToastContainer />

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
      </Spin>
    );
  }
}

export default Login;
