import React, { Component } from 'react';

const divStyle = {
  // border: 'orange solid thin',
  // padding: '2px',
  // margin: '4px',
  textAlign:'center'
}
const imgStyle = {
  border: 'orange solid 4px',
  // padding: '2px',
  margin: '16px',
  textAlign:'center'
}
class Image extends Component {
  render() {
    return (
      <div id={this.props.id} className="Image col-3"
      style = {divStyle} 
      onClick={() => this.props.handleImageClick(this.props.id)}  
      >
        <img id={this.props.id} src={this.props.path} alt={this.props.name}
        style={imgStyle}
        // onClick={() => this.props.onClick(this.props.id)} 
          />
      </div>
    );
  }
}

export default Image;