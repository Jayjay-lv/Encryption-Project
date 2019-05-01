
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
      <div class="container"> 
      <div class="mid-article">
     <form> 
    <Form.Group controlId="formBasicInput">
    <Form.Label>
    Input: 
    </Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter Input" name="Input" onChange={this.updateName} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
      <br/>
      Output Decryption 1: <br/>
      </form>;

      Encrypted message: {this.state.cipherText} <br/>
      Decrypted message: {decrypt1(this.state.cipherText)}
      <br/><br/>
      Output Decryption 2:
       <br/>
      Encrypted message: {this.state.cipherText2} <br/>
      Decrypted message: {decrypt2(this.state.cipherText2)}
      
      </div>
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
  letters.forEach((letter) => {cipherText2 += '@' + letter} );
  return cipherText2;

}

function decrypt2(phrase){

}

export default App;

