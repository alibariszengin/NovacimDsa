import React from 'react';


const Input=(props) =>{
	let {type}=props;
	
	return (

        <input className="br2 bw1 grow b--blue"
          type={type}
        />
	);


}

export default Input;