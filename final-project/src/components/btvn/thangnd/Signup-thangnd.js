import React, { Component } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./Signup-thangnd.css";

class Singup extends Component {
  state = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    phone: "",
    loggedIn: false,
  };
  render() {
    return (
      <div className="container-fluid main d-flex justify-content-center align-items-center">
        <ToastContainer />
        {this.state.loggedIn ? <Navigate to="/home-page" /> : null}
        <div className="login-wrapper">
          <div className="header">
            <h4 style={{ fontWeight: 700 }}>Signup</h4>
          </div>
          <label className="label-input mt-2">Fullname</label>
          <div className="input-group">
            <div className="input-group-prepend prepend">
              <i className="fas fa-id-badge"></i>
            </div>
            <input
              type="text"
              name="fullname"
              className="form-control"
              placeholder="Fullname"
              id="fullname"
              value={this.state.fullname}
              onChange={this.onChangeInputField}
            />
          </div>
          <label className="label-input mt-2">Email</label>
          <div className="input-group">
            <div className="input-group-prepend prepend">
              <i className="fas fa-envelope"></i>
            </div>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="email"
              id="email"
              value={this.state.email}
              onChange={this.onChangeInputField}
            />
          </div>
          <label className="label-input mt-2">Phone</label>
          <div className="input-group">
            <div className="input-group-prepend prepend">
              <i className="fas fa-phone"></i>
            </div>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone"
              id="phone"
              value={this.state.phone}
              onChange={this.onChangeInputField}
            />
          </div>
          <label className="label-input mt-2">Username</label>
          <div className="input-group">
            <div className="input-group-prepend prepend">
              <i className="fas fa-user"></i>
            </div>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              id="username"
              value={this.state.username}
              onChange={this.onChangeInputField}
            />
          </div>
          <label className="label-input mt-2">Password</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend prepend">
              <i className="fas fa-lock"></i>
            </div>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              id="password"
              value={this.state.password}
              onChange={this.onChangeInputField}
            />
          </div>
          {/* <div className="d-flex justify-content-end">
            <span>
              <Link to="#" className="link">
                Forgot your password?
              </Link>
            </span>
          </div> */}
          <div className="my-2 p-2 button-login" onClick={this.submit}>
            SIGNUP
          </div>
          <div className="text-center mt-5">
            <span style={{ fontWeight: 600 }}>
              Already have an account? <Link to="/">Sign in</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }

  onChangeInputField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submit = () => {
    console.log(this.state);
  };
}

export default Singup;
