import React from 'react';
import Form from'./SignUpForm';

const SignUp=() =>{

	return (
		<div id="SignUp" style={{background: 'linear-gradient(to left,rgba(7,27,82,0.5) 0%,rgba(0,128,128,0.3) 100%)'}} 
		className='bg-light-green h-100 w-100 '>
			<div className='w-25 center'>
				<div className="bb bl br br2 b--blue">
					<h2 className='pt3'>Sign Up</h2>
				</div>
				
				<h2 className="mt5">Enter Your Informations</h2>
				<Form/>
			</div>
			<button style={{background: 'linear-gradient(to right,rgba(7,1000,82,0.3) 0%,rgba(0,128,128,0.8) 100%)'}} 
			className="mt4 mb3 dim w4 pa2 br3 bw1 b--green 
			navy pointer bg-green">
				Sign Up
			</button>
		</div>
	);


}

export default SignUp;