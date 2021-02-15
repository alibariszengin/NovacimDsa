import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-scroll'

const Banner=() =>{

	return (
		<div style={{background: 'linear-gradient(to left,rgba(7,27,82,0.5) 0%,rgba(0,128,128,0.3) 100%)'}} 
		className='bg-light-green h-100 w-100 '>
			<div className='w-75 center mt6'>
				<img alt='logo' src={logo} className='w-50'/>
				<div className='ml4 mt6'>
					<Link to="resume" className='pointer ba br3 pa2 tc blue mr5 fw6 f2'>Resume</Link>
					<Link to="SignUp" className='pointer ba br3 pa2 tc blue mr5 fw6 f2'>Sign Up For Free</Link>
					<Link to="ContactUs" className='pointer ba br3 pa2 tc blue mr5 fw6 f2'>Contact Us</Link>
				</div>
			</div>
		</div>
	);


}

export default Banner;