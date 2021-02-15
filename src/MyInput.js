import React from 'react';


const Input=({type, onChange , name ,id}) =>{

	
	return (

        <input id={id} className="br2 bw1 grow b--blue"
          type={type} 
          onChange={onChange} 
          name={name}
        />
	);


}

export default Input;