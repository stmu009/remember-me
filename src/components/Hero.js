import React, { Component } from 'react';

const backgroundImage = './images/backgroundImage.jpg'
const logoPath = './images/cocoLogo.png'

const jumboStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  color: '#e68e23',
  textAlign: 'center'
}

const logoStyle = {
  width: 200
}

class Hero extends Component {

  render() {
    return (
      <div className="jumbotron" style={jumboStyle}>
        <img style={logoStyle} src={logoPath} alt="Coco"/>
        <h1>"Remember Me"</h1>
        <h2>Click on an image to earn points, but don't click on any more than once.</h2>
      </div>
    );
  }
}

export default Hero;