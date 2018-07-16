import React, { Component } from "react";
import Title from "./Title";
import Instruction from "./Instruction";
import Score from "./Score";

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <Title />
          <Instruction />
          <Score />
        </ul>
      </div>
    );
  }
}

export default Header;
