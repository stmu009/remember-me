import React, { Component } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Images from './components/Images'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Images />
      </div>
    );
  }
}

export default App;
