import React from 'react';
import { useHistory , Link } from "react-router-dom";
import Back from './back.svg';
const Menu=() =>{

        const history = useHistory();

        function handleClick(event) {
          let target=event.target.innerHTML;
          if(target!="Menu"){
                target="/menu/"+target;
          }
          else{
                target="../menu"
          }

          console.log(target.toLowerCase())
          history.push(target.toLowerCase());
        }
	return(
        <div className="bg-black h-100 flex flex-column" style={{width :`400px`}}>
          <Link to="/"><img alt="back" src={Back} className="pointer w2 absolute top-2 left-2 "/></Link>
        	<h1  onClick={handleClick} className="pointer mt5 white">Menu</h1>
        	<div className="ml4 mr4 br2 mt3 h-75 bg-white ">
        		<ul className="list pl0 mt0 measure center">
        			<li onClick={handleClick} className="br2 br--top  items-center lh-copy pa3 ph0-l bb b--black-10 pointer dim bg-gray" >Dashboard</li>
        			<li onClick={handleClick} className="items-center lh-copy pa3 ph0-l bb b--black-10 pointer dim bg-gray">Projects</li>
        		</ul>
        	</div>
        </div>
	);


}
export default Menu;