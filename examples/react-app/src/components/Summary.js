import React, { Component } from "react";

class Summary extends Component {
  render() {
    return (
      <div>
        Summary,{" "}
        <button onClick={this.props.changeUsername}>
          change on Summary component
        </button>
      </div>
    );
  }
}

export default Summary;
