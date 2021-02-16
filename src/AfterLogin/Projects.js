import React,{ useState } from 'react';
import Input from '../MyInput';
import alertify from "alertifyjs";
const Projects=() =>{

	let [longUrl, setLongUrl] = useState();

    const requestOptions = {
	 method: 'POST',
	  headers: {
	    
	    'Content-Type': 'application/json'
	  },
       body: JSON.stringify(longUrl)
    };

    const buttonClicked = (event) => {

      var inpUrl=document.getElementById('url').value;
      inpUrl=inpUrl.trim();
      requestOptions.body= JSON.stringify({url : inpUrl});
      	console.log(requestOptions.body);
      fetch('https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten', requestOptions)
       .then(response => response.json())
      .then(data =>  longUrl=data.result_url );
  		console.log(longUrl);
  		alertify.alert("Here is your Url ==> "+longUrl);
    };

    
	return (
		<div className="vh-100 bg-light-gray h-100 w-100">
			<div className="center mv7 w-25">
				<h2 className="tl gray ml2">URL:</h2>
				<Input id={"url"} />

				<button onClick={buttonClicked} className="pointer db center mt3 white bg-gray mb4 br4 bw1 pa2 grow shadow-3">
					Shorten
				</button>
			</div>

		</div>


	);


}

export default  Projects;