import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.encrpytLevel = 1;
    this.state = {
      plaintext: "",
      cipherText: ""
    };
    this.updateName = this.updateName.bind(this);
  }

  updateName(event){
      const plaintext = event.target.value;
      const cipherText = encrypt1(plaintext);
      const cipherText2 = encrypt2(plaintext);
      this.setState({plaintext, cipherText});
      this.setState({plaintext, cipherText2});
  }
  
  // changeEncryptLevel(){
  //   if (this.encrpytLevel = 1)
  //     this.encrpytLevel = 2
  //   if (this.encrpytLevel = 2)
  //     this.encrpytLevel = 1
  //   // return this.encrpytLevel

  // }

  render() {
    return(
      <div> <form> 
      Input: <br /> 
      <input type="text" name="Input" onChange={this.updateName}/> <br/>
      <br/>
      Output Decryption 1: <br/>
      </form>
      Encrypted message: {this.state.cipherText} <br/>
      Decrypted message: {decrypt1(this.state.cipherText)}
      <br/><br/>
      Output Decryption 2:
       <br/>
      Encrypted message: {this.state.cipherText2} <br/>
      Decrypted message: {decrypt2(this.state.cipherText2)}
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
function randomSymbol(){
  var randomNum1 = Math.floor((Math.random() * 25) + 0)
  var symbols = "å∫ç∂´ƒ©˙ˆ∆˚¬µ˜øπœ®ß†¨√∑≈¥Ω"
  var randsymbol = symbols[randomNum1]
  return randsymbol

}
const NumberMapping = {
  "a": 0,
  "b": 1,
  "c": 2,
  "d": 3,
  "e": 4,
  "f": 5,
  "g": 6,
  "h": 7,
  "i": 8,
  "j": 9,
  "k": 10,
  "l": 11,
  "m": 12,
  "n": 13,
  "o": 14,
  "p": 15,
  "q": 16,
  "r": 17,
  "s": 18,
  "t": 19,
  "u": 20,
  "v": 21,
  "w": 22,
  "x": 23,
  "y": 24,
  "z": 25,
}

const mapping = {
  "a": "å",
  "b": "∫",
  "c": "ç",
  "d": "∂",
  "e": "´",
  "f": "ƒ",
  "g": "©",
  "h": "˙",
  "i": "ˆ",
  "j": "∆",
  "k": "˚",
  "l": "¬",
  "m": "µ",
  "n": "˜",
  "o": "ø",
  "p": "π",
  "q": "œ",
  "r": "®",
  "s": "ß",
  "t": "†",
  "u": "¨",
  "v": "√",
  "w": "∑",
  "x": "≈",
  "y": "¥",
  "z": "Ω",
}

function CeasarEncrypt(phrase, shift){
  const letters = phrase.split('');
  let numbers = letters.map((letter) => {return NumberMapping[letter]});
  let shiftedNumbers = numbers.map((number) => {return (number + shift) % 26});
  var alphabet = "å∫ç∂´ƒ©˙ˆ∆˚¬µ˜øπœ®ß†¨√∑≈¥Ω";
  let NewLetters = shiftedNumbers.map((number) => {return alphabet[number]});
  return NewLetters;

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
  let cipherText2 = '';
  CeasarEncrypt(phrase.toLowerCase(), 3).forEach((letter) => {cipherText2 += randomSymbol() + letter} );
  return cipherText2;
}

function decrypt2(phrase){

}

export default App;












