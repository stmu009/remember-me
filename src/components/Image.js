import React, { Component } from 'react';


class Image extends Component {
  render() {
    return (
      <div id={this.props.id} className="Image" onClick={() => this.props.onClick}  >
        <img id={this.props.id} src={this.props.src} alt={this.props.name}
          // onClick={() => this.props.onClick}  
          />
      </div>
    );
  }
}

export default Image;