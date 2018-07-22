import React, { Component } from 'react';
import Image from './Image'
import characters from "../characters.json"

class Images extends Component {
  // constructor(props){
  //   super(props);
  //   this.handleImageChange=this.handleImageChange.bind(this);
  // }
  state = {
    shuffledCharacters: this.shuffle(characters),
    imagesClickedIds: [],
    score: 0,
    topScore: 0
  }

  shuffle(array) {
    console.log('shuffled');
    let counter = array.length;
    console.log(`counter: ${counter}`);
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    console.log('after shuffle')
    console.log({array});
    return array;
  }

  handleImageChange(id) {
    console.log('clicked');
    // this.setState.imagesClickedIds = id
    this.setState.shuffledCharacters = this.shuffle(characters);
    console.log('state after shuffle',this.state.shuffledCharacters);
  }

  render() {
    return (
      <div className="Images container">
      <div className="row">
        {this.state.shuffledCharacters.map(character => {
          return <Image onClick={() => this.handleImageChange(character.id)}
            key={character.id} id={character.id} path={character.path}
          // onClick={this.handleImageChange(character.id)}

          />
        })
        }
        </div>
      </div>
    );
  }
}

export default Images;