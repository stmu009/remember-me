import React, { Component } from 'react';


class Image extends Component {
  render() {
    return (
      <div id={this.props.id} className="Image col-3" 
      // onClick={() => this.props.handleImageChange(this.props.id)} 
      // onClick={() => this.props.onClick(this.props.id)}  
      >
        <img id={this.props.id} src={this.props.path} alt={this.props.name}
        onClick={() => this.props.onClick(this.props.id)} 
          // onClick={() => this.props.onClick}  
          // onClick={() => this.props.handleImageChange(this.props.id)}
          />
      </div>
    );
  }
}

export default Image;