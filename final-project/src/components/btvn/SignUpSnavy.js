import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class SignUp extends Component {
    state = {
      fullName:'',
      username: '',
      password:'',
      phoneNumber:'',
      email:'',
    } 

    onChangeUsername = (evnt) =>{ 
      this.setState({ username: evnt.target.value });
    }
  
    onChangePassword = (evnt) =>{ 
      this.setState({ password: evnt.target.value });
    }

    onChangeFullName = (evnt) =>{ 
      this.setState({ fullName: evnt.target.value });
    }

    onChangeEmail = (evnt) =>{ 
      this.setState({ email: evnt.target.value });
    }

    onChangePhoneNumber= (evnt) =>{
      this.setState({ phoneNumber: evnt.target.value})
    }

    submit = () =>{
      localStorage.setItem('userCreated', JSON.stringify({fullName: this.state.fullName, username: this.state.username , password: this.state.password, email: this.state.email, phoneNumber: this.state.phoneNumber}));
      toast('You signed up successfully! Please return to login page to login');
    }

    render() { 
        return (
            <div className="container-fluid main d-flex justify-content-center align-items-center">
        <ToastContainer /> 
        <div className="login-wrapper">
          <div className="header">
            <h4 style={{ fontWeight: 700 }}>Sign Up</h4>
          </div>
          
          <label className="label-input mt-2">Full Name</label>
          <div className="input-group">
            <div className="input-group-prepend prepend">
              <i className="fas fa-user"></i>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              id="username"
              value={this.state.fullName}
              onChange={this.onChangeFullName}
            />
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

          <label className="label-input mt-2">Email</label>
          <div className="input-group">
            <div className="input-group-prepend prepend">
            <i className="fas fa-at"></i>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              id="username"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          
          <label className="label-input mt-2">Phone Number</label>
          <div className="input-group">
            <div className="input-group-prepend prepend">
            <i className="fas fa-phone-square-alt"></i>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              id="username"
              value={this.state.phoneNumber}
              onChange={this.onChangePhoneNumber}
            />
          </div>
          
          <div className="d-flex justify-content-end">
            <span>
              <a href="#" className="link">
                Forgot your password?
              </a>
            </span>
          </div>
          <div className="my-2 p-2 button-login" onClick={this.submit}>SIGN UP</div>
          <div className="text-center mt-5">
            <span style={{ fontWeight: 600 }}>
              Already have an account? <a href="/">Sign in</a>
            </span>
          </div>
        </div>
      </div>
        );
    }
}
 
export 
default SignUp;