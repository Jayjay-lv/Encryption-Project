import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const specialAlphabet = "å∫ç∂´ƒ©˙ˆ∆˚¬µ˜øπœ®ß†¨√∑≈¥Ω ";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "

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
  " ": 26,
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
  " ": " ",
}

class App extends Component {
  constructor(props) {
    super(props);
    this.encrpytLevel = 1;
    this.state = {
      plaintext: "",
      cipherText: "",
      cipherText2: ""
    };
    this.updateName = this.updateName.bind(this);
    this.randomLetter = this.randomLetter.bind(this);
    this.randomSymbol = this.randomSymbol.bind(this);
    this.CeasarEncrypt = this.CeasarEncrypt.bind(this);
    this.encrypt1 = this.encrypt1.bind(this);
    this.decrypt1 = this.decrypt1.bind(this);
    this.encrypt2 = this.encrypt2.bind(this);
    this.decrypt2 = this.decrypt2.bind(this);
  }

  updateName(event){
      const plaintext = event.target.value;
      this.setState({plaintext});
      const cipherText = this.encrypt1(plaintext);
      const cipherText2 = this.encrypt2(plaintext);
      this.setState({cipherText, cipherText2});
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
      Decrypted message: {this.decrypt1(this.state.cipherText)}
      <br/><br/>
      Output Decryption 2:
       <br/>
      Encrypted message: {this.state.cipherText2} <br/>
      Decrypted message: {this.decrypt2(this.state.cipherText2)}
      </div>
    );
  }  

  randomLetter(){
    var randomNum = Math.floor((Math.random() * 25) + 0)
    var randLetter = alphabet[randomNum]
    return randLetter
  }

  randomSymbol() {
    var randomNum1 = Math.floor((Math.random() * 25) + 0);
    var symbols = "å∫ç∂´ƒ©˙ˆ∆˚¬µ˜øπœ®ß†¨√∑≈¥Ω";
    var randsymbol = symbols[randomNum1];
    return randsymbol;
  }


  CeasarEncrypt(phrase, shift){
    const letters = phrase.split('');
    let numbers = letters.map((letter) => {return NumberMapping[letter]});
    let shiftedNumbers = numbers.map((number) => {return (number + shift) % 27});
    let NewLetters = shiftedNumbers.map((number) => {return specialAlphabet[number]});
    return NewLetters;

  }
    
  encrypt1(phrase){
    const letters = phrase.split('');
    let cipherText = '';
    letters.forEach((letter) => {cipherText += this.randomLetter() + letter} )
    return cipherText.toUpperCase();
  }

  decrypt1(phrase){
    const newLetters = phrase.split('');
    let answer = '';
    newLetters.forEach((letter, i) => {if (i % 2 != 0) answer += letter})
    return answer;
  }

  encrypt2(phrase){
    let cipherText2 = '';
    console.log(phrase.length)
    this.CeasarEncrypt(phrase.toLowerCase(), phrase.length).forEach((letter) => {cipherText2 += this.randomSymbol() + letter} );
    return cipherText2;
  }

  decrypt2(phrase){
    const newSymbols = phrase.split('');
    let answer = '';
    newSymbols.forEach((letter, i) => {if (i % 2 != 0) answer += letter});
    let NumberArray = answer.split("").map((c) => specialAlphabet.indexOf(c));
    let shiftedNumberArray = [];
    NumberArray.forEach((number, i) => {shiftedNumberArray.push((number + 27 - answer.length) % 27)});
    let originalMessage = shiftedNumberArray.map((number) => {return alphabet[number]});
    console.log(originalMessage)
    return originalMessage;
    
    // let shiftedNumberArray = NumberArray.forEach((number) => {number -= answer.length})
    // console.log(NumberArray)
    // return "still not working :(";
  }
}

  export default App;












