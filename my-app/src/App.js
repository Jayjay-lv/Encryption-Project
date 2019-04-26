import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  static propTypes = {
  id: PropTypes.string.isRequired,
  locked: PropTypes.bool,
  focussed: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
 };

 static defaultProps = {
   locked: false,
   focussed: false,
   value: '',
   error: '',
   label: '',
   predicted: '',
   onChange: () => '',
  };



  constructor(props) {
    super(props);
    this.state = {
      plaintext: "",
      cipherText: "",
      focussed: (props.locked && props.focussed) || false,
      value: props.value || '',
      error: props.error || '',
      label: props.label || '',
    };
    this.updateName = this.updateName.bind(this);
  }

  onChange = event => {
   const { id } = this.props;
   const value = event.target.value;
   this.setState({ value, error: '' });
   return this.props.onChange(id, value);
 }


  updateName(event){
    const plaintext = event.target.value;
    const cipherText = encrypt1(plaintext);
    this.setState({plaintext, cipherText});
  }
  
  render() {
    const { focussed, value, error, label } = this.state;
    const { id, type, locked } = this.props;
    const fieldClassName = `field ${(locked ? focussed : focussed || value) && 'focussed'} ${locked && !focussed && 'locked'}`;
    return(
      <div App={App}> 
      <form> 
      Input: <br /> 
      <input 
      type="text" 
      name="Input" 
      onChange={this.updateName}
      onInput ={this.onChange} 
      onFocus={() => !locked && this.setState({ focussed: true })}
      onBlur={() => !locked && this.setState({ focussed: false })}/> <br/>
      <br/>
      Output: <br/>
      </form>
      {this.state.cipherText} <br/>
      {decrypt1(this.state.cipherText)}
       <label htmlFor={id} className={error && 'error'}> {error || label} </label>

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








