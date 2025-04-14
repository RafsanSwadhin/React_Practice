import React, { Component } from "react";
import Home from "./Home";
import LogIn from "./LogIn";

class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <Home /> : <LogIn />}
      </div>
    );
  }
}

export default Condition;
