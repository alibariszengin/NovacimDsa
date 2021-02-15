import React from 'react';
import ReactDOM from 'react-dom';
import Input from './MyInput';
import onChangeHandler from './App';
const Form=({change}) =>{
  

    return (
      <form className="tl">
   
        <p>Name:</p>
        <Input />
        <p>Company (Optinal):</p>
        <Input/>
        <p>Email Adress:</p>
        <Input name = {"mail"} onChange={change}/>
        <p>Password:</p>
        <Input name = {"mail"} type={`password`} onChange={change}  />
      </form>
    );

 
}

export default Form;