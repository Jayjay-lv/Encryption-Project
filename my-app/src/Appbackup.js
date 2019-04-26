import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import React, { Component } from 'react';

export default class TextInput extends Component {
  render() {
    return (
      <div className="field" />
    )
  }
}

export default class Field extends Component {
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
    predicted:'',
    onChange: () => '',
};

 
  constructor(props) {
    super(props);
    this.state = {
      plaintext: ""
    };
    this.updateName = this.updateName.bind(this);
  };


 constructor(props) {
    super(props);

 this.state = {
  focussed: (props.locked && props.focussed) || false,
  value: props.value || '',
  error: props.error || '',
  label: props.label || '',
  };
 },
    
  onChange = event => {
    const { id } = this.props;
    const value = event.target.value;
    this.setState({ value, error: '' });
  return this.props.onChange(id, value);
  },

  updateName(event){
    this.setState({plaintext: event.target.value})
  },




  render() {
     const { focussed, value, error, label } = this.state;
      const { id, type, locked } = this.props;

      const fieldClassName = `field ${(locked ? focussed : focussed || value) && 'focussed'} ${locked && !focussed && 'locked'}`;
      return(
        <div className={fieldClassName}> 
        );
    return(
      <div className="field"/> <form> 
      Input: <br /> 
      <input type='text' id={id} name="Input" placeholder='Large' onChange={this.onChange} 
        onFocus={() => !locked && this.setState({ focussed: true })}
        onBlur={() => !locked && this.setState({ focussed: false })}
        /> 
        <label htmlFor={id} className={error && 'error'}>
        {error || label}
        </label>
      <br/>
      output: <br/>
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