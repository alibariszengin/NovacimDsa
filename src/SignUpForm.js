import React from 'react';
import ReactDOM from 'react-dom';
import Input from './MyInput';
class Form extends React.Component {
  render() {
    return (
      <form className="tl">
   
        <p>Name:</p>
        <Input/>
        <p>Company (Optinal):</p>
        <Input/>
        <p>Email Adress:</p>
        <Input/>
        <p>Password:</p>
        <Input type={`password`}/>
      </form>
    );
  }
}

export default Form;