import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plaintext: ""
    };
    this.updateName = this.updateName.bind(this);
  }

  updateName(event){
    this.setState({plaintext: event.target.value})
  }
  
  render() {
    return(
      <div> <form> 
      Input: <br /> 
      <input type="text" name="Input" onChange={this.updateName}/> <br/>
      Output: <br/>
      <input type="text" name="Output" /> <br/>
      </form>
      {encrypt(this.state.plaintext)}
      </div>
    );
  }
}   

function encrypt(phrase){
  return "a" + phrase + "a";
}

function decrypt(){

}

export default App;
