import React from 'react';
import icon from '../top.svg';
import {Link} from 'react-scroll'
const GoToTop=() =>{

	return (
		
			<Link to="navbar"><img alt="top_icon" src={icon} className="pointer w2 absolute bottom-2 right-2 fixed br3"/></Link>
		
	);


} 

export default GoToTop;