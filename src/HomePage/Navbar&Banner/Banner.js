import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-scroll'

const Banner=() =>{

	return (
		<div style={{background: 'linear-gradient(to left,rgba(7,27,82,0.5) 0%,rgba(0,128,128,0.3) 100%)'}} 
		className='bg-light-green h-100 w-100 '>
			<div className='w-75 center mt6'>
				<img alt='logo' src={logo} style={{width:"500px"}}/>
				<div className='mt6' style={{marginLeft:"200px"}} >
					<Link to="resume" className='fl pointer ba br3 pa2 tc blue mr5 fw6 f2 f4-m'>Resume</Link>
					<Link to="SignUp" className='fl pointer ba br3 pa2 tc blue mr5 fw6 f2 f4-m' >Sign Up For Free</Link>
					<Link to="ContactUs" className='fl pointer ba br3 pa2 tc blue mr5 fw6 f2 f4-m'>Contact Us</Link>
				</div>
			</div>
		</div>
	);


}

export default Banner;