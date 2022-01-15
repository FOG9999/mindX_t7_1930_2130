import React, { Component } from "react";
import Summary from "./Summary";

class LandingPage extends Component {
  state = {
    username: "Username",
    beta: "beta",
  };

  // props ===> properties

  // tu khoa this no tro vao ngu canh cua thang thang dang call no
  changeUsername = () => {
    // arrow function
    this.setState({
      username: "xxx",
    });
  };

  render() {
    return (
      <div>
        Landing Page, Hello {this.state.username} <span>{this.state.beta}</span>{" "}
        <button onClick={this.changeUsername}>change</button>{" "}
        <Summary changeUsername={this.changeUsername} />
      </div>
    );
  }
}

export default LandingPage;
