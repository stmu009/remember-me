import React, { Component } from 'react';


class Score extends Component {
  render() {
    return (
      <div className="Score">Score: {this.props.score}| Top Score: {this.props.topScore}</div>
    );
  }
}

export default Score;