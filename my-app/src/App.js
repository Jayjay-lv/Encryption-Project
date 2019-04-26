import './bootstrap.css';
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
    const cipherText = encrypt1(plaintext);
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
      {decrypt1(this.state.cipherText)}
      </div>

      <div> 
      Output: Decryption 2
       <br/>
      {this.state.cipherText2} <br/>
      {decrypt2(this.state.cipherText2)}
      </div>
    );
  }
}   

function randomLetter(){
  var randomNum = Math.floor((Math.random() * 25) + 0)
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var randLetter = alphabet[randomNum]
  return randLetter
}

function encrypt1(phrase){
  const letters = phrase.split('');
  let cipherText = '';
  letters.forEach((letter) => {cipherText += randomLetter() + letter} )
  return cipherText.toUpperCase();
}

function decrypt1(phrase){
const newLetters = phrase.split('');
let answer = '';
newLetters.forEach((letter, i) => {if (i % 2 != 0) answer += letter})
return answer;
}

function encrypt2(phrase){
  const letters = phrase.split('');
  let cipherText2 = '';
  letters.forEach((letter) => {cipherText2 += randomLetter() + letter} );
  letters.fromCharCode(0);
  return cipherText2;

}

function decrypt2(phrase){

}

export default App;

