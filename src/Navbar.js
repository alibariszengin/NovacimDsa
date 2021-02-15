
import React from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
const Navbar=() =>{
	const history = useHistory();

	function handleClick() {
	  history.push("/login");
	}
	return (
		<div id="navbar" className='bg-light-green db pa3 bw2 shadow-5' >
			<div className='w4 mt2'>
				<img alt='logo' src={logo} className='fl w-100'/>
			</div>
			<Button type="button" onClick={handleClick} className='grow pointer link bw0 dib ph3 fr f3 mr5 mt3 pa2 br3'
			 style={{background: 'linear-gradient(to left,rgba(7,27,82,0.5) 0%,rgba(0,128,128,0.3) 100%)'}}>
			 Log In</Button>
		</div>
	);


}

export default  Navbar;