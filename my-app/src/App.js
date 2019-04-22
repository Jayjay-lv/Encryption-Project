import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plaintext: "",
      cipherText: ""
    };
    this.updateName = this.updateName.bind(this);
  }

  updateName(event){
    const plaintext = event.target.value;
    const cipherText = encrypt(plaintext);
    this.setState({plaintext, cipherText});
  }
  
  render() {
    return(
      <div> <form> 
      Input: <br /> 
      <input type="text" name="Input" onChange={this.updateName}/> <br/>
      <br/>
      Output: <br/>
      </form>
      {this.state.cipherText} <br/>
      {decrypt(this.state.cipherText)}
      </div>
    );
  }
}   

function randomLetter(){
  var randomNum = Math.floor((Math.random() * 25) + 0)
  var alphabet = "abcdefghijklmopqrstuvwxyz"
  var randLetter = alphabet[randomNum]
  return randLetter
}

function encrypt(phrase){
  const letters = phrase.split('');
  let cipherText = '';
  letters.forEach((letter) => {cipherText += randomLetter() + letter} )
  return cipherText;
}

function decrypt(phrase){
const newLetters = phrase.split('');
let answer = '';
newLetters.forEach((letter, i) => {if (i % 2 != 0) answer += letter})
return answer;
}

export default App;
