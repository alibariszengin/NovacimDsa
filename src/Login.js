import React , { useState } from 'react';
import icon from './top.svg';
import {Link} from 'react-scroll'
import Input from './MyInput';
import Cancel from './cancel.svg';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
const Login=() =>{
	

   
	const history = useHistory();

	function handleClick() {
	  history.push("/");
	}

	const logIn = (e) =>{
		var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
 		var inpMail=document.getElementById('logMail').value;
 		var inpPass=document.getElementById('logPass').value;
	    while ( i ) {

	        var infos = JSON.parse(localStorage.getItem(i));
	        if(inpMail == infos.mail && inpPass == infos.password){
	        	console.log("Yes girdin");
	        }
	        i--;
	    }
		
	
	};
	return (
		<div className=" w-100 z-max ba fixed aspect-ratio--object">
			
			
			<div className="pa5 h2 ba br4 vh-75 w-25 bg-blue o-90 center mt5 relative">
				<Link onClick={handleClick} ><img alt="cancel" src={Cancel} className="w2 pointer absolute top-1 right-2"/></Link>
				<h1>Login</h1>
				<form className="tc pt5">
		   
			        <p className="b">Email Adress:</p>
			        <Input id={'logMail'}/>
			        <p className="b">Password:</p>
			        <Input id={'logPass'} type={`password`}  />
		      	</form> 
		      	<Button onClick={logIn} className="mt5 br3 ph4 pv2 pointer" style={{background: 'linear-gradient(to right,rgba(7,27,82,0.4) 0%,rgba(0,128,250,0.6) 100%)'}}> Log In </Button>
			</div>
			
		</div>
		

			
	);


} 

export default Login;