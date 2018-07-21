import React, { Component } from "react";
import Title from "./Title";
import Instruction from "./Instruction";
import Score from "./Score";

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        
          <Title className="navbar-brand" />
          <Instruction />
          <Score />
        
      </div>
    );
  }
}

export default Header;
