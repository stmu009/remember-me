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
    console.log('shuffling');
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
    console.log({ array });
    return array;
  }

  handleImageClick(id) {
    console.log('clicked');
    console.log('id clicked:', id)
    console.log('imagesClickedArray:', this.state.imagesClickedIds)
    if (this.state.imagesClickedIds.includes(id)) {
      alert("game over");
      this.setState({ imagesClickedIds: [], score: 0 });
      // this.setState.score=0;
    }
    else {
      //add id to clicked images
      let tempClicks = [...this.state.imagesClickedIds, id]
      let tempCharacters = this.shuffle(characters)
      let newScore = this.state.score + 1;
      //modify parents state????
      console.log('score', this.props.score)
      // _score = this.state.score + 1;
      //
      this.setState({
        imagesClickedIds: tempClicks,
        shuffledCharacters: tempCharacters,
        score: newScore
      })
      console.log('state after shuffle', this.state.shuffledCharacters);

      if (this.state.score > this.state.topScore) {
        this.setState({
          shuffledCharacters: tempCharacters,
          score: newScore,
          _topScore: newScore
        })
        //modify parents state?????
        // this.props.topScore = this.state.topScore;
        //
      }
    }
    // check if id is clickedArray
    // if in clickedArray
    //   then game over alert
    //   then set clickedArray to empty array
    //   then set score to 0
    // else (not in clickArray)
    //   shuffle images
    //   increment score
    //   if higher then topscore
    //     then set topscore to value of score



    // this.setState.imagesClickedIds = id
    let temp = this.shuffle(characters)
    this.setState.shuffledCharacters = temp;
    console.log('state after shuffle', this.state.shuffledCharacters);
  }

  render() {
    return (
      <div className="Images container" >
        <div className="row" >
          {this.state.shuffledCharacters.map(character => {
            console.log('Mapping')
            return <Image handleImageClick={() => this.handleImageClick(character.id)}
              key={character.id} id={character.id} path={character.path}

            />
          })
          }
        </div>
      </div>
    );
  }
}

export default Images;