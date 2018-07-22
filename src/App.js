import React, { Component } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Images from './components/Images'


class App extends Component {
  state ={
    score:0,
    topScore:0
  }
  render() {
    return (
      <div className="App">
        <Header score={this.state.score} topScore={this.state.topScore}/>
        <Hero />
        <Images score={this.state.score} topScore={this.state.topScore}/>
      </div>
    );
  }
}

export default App;
