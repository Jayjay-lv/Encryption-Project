
import 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
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
      <div id='div'> 
      <div>
      <Alert variant="success">
  <Alert.Heading className='Outputs'role="alert" class="alert alert-success">Hey, Welcome to Our encryption Site</Alert.Heading>
  <p className='Outputs' type="text">
    Anyways Put something in the input box and we'll make it so  no one understands what you typed
  </p>
  <hr />
  </Alert>
     <form> 
    <Form.Group id='box'controlId="formBasicInput">
    <Form.Label id='Input'>
   <p>
    Encrypt
    </p>
    </Form.Label>
    <Form.Control type="text" placeholder="Enter Input" className='Inputbox' onChange={this.updateName} />
    <Form.Text>
    <p id='message'>
      We'll never share your message with anyone else.
      </p>
    </Form.Text>
    </Form.Group>
      <br/>
      </form>
      <p className ='Outputs' type="text">
      Output Decryption 1:
       <br/>
      Encrypted message: {this.state.cipherText} <br/>
      Decrypted message: {decrypt1(this.state.cipherText)}
      <br/><br/>
      Output Decryption 2:
       <br/>
      Encrypted message: {this.state.cipherText2} <br/>
      Decrypted message: {decrypt2(this.state.cipherText2)}
      </p>
      </div> 
      <script 
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin> 
      </script>
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

