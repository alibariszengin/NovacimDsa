import React, {Component} from 'react';
import Form from'./SignUpForm';
import alertify from "alertifyjs";

class SignUp extends Component{
	state = {
      mail: '',
      password: '',
      i : 1
    };
   
    handleChange = (event) => {
      const input = event.target;
      const value =  input.value;
      console.log(value);
      this.setState({ [input.name]: value });
  
    };

	handleFormSubmit = () => {
	  const { mail,password } = this.state;
	
	  //localStorage.setItem('mail', mail);
	  //localStorage.setItem('password', password);
	  var myObject = { mail: mail, password: password };
	  localStorage.setItem(this.state.i, JSON.stringify(myObject));
	  this.state.i=this.state.i+1;
	  
	  alertify.success("You just sign up !! ");
	  console.log("Handeled");
	};
	render(){
		return (
			<div id="SignUp" style={{background: 'linear-gradient(to left,rgba(7,27,82,0.5) 0%,rgba(0,128,128,0.3) 100%)'}} 
			className='bg-light-green h-100 w-100 '>
				<div className='w-25 center'>
					<div className="bb bl br br2 b--blue">
						<h2 className='pt3'>Sign Up</h2>
					</div>
					
					<h2 className="mt5">Enter Your Informations</h2>
					<Form change={this.handleChange}/>
				</div>
				<button onClick={this.handleFormSubmit} style={{background: 'linear-gradient(to right,rgba(7,1000,82,0.3) 0%,rgba(0,128,128,0.8) 100%)'}} 
				className="mt4 mb3 dim w4 pa2 br3 bw1 b--green 
				navy pointer bg-green">
					Sign Up
				</button>
			</div>
		);
	}
	


}

export default SignUp;