import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <div> <form> 
      Input: <br /> 
      <input type="text" name="Input" /><br />
      Output: <br />
      <input type="text" name="Output" /><br />
      </form>
      </div>);
  }
}   

export default App;
