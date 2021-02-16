import React from 'react';
import Input from '../../MyInput';
import { Button } from 'react-bootstrap';
import {Link} from 'react-scroll'

import Linkedin from './linkedin.svg';
import Twitter from './twitter.svg';
import Instagram from './instagram.svg';

import alertify from "alertifyjs";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    const gotMessage=()=>{
      alertify.success("We got your message ^^ ");
    }
    return(
        <div id="ContactUs" className="w-100 bt" style={{background: 'linear-gradient(to left,rgba(7,27,82,0.5) 0%,rgba(0,128,128,0.3) 100%)'}}>
            <h2>Contact Us</h2>
            <div className="ba br4 w-50 center bg-white flex br--top " style={{minWidth:"400px"}}>
                
                <div className="w-50 ">
                    <form className=" b--black bw1 ml5 tl">
                        
                        <p>Name:</p>
                        <Input/>
                        <p>Email Adress:</p>
                        <Input/>
                        <p>Message:</p>
                        <textarea className="form-control w-75 h4" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />

                    </form>
                    <Button onClick={gotMessage} style={{background: 'linear-gradient(to right,rgba(7,1000,82,0.3) 0%,rgba(0,128,128,0.8) 100%)'}} 
                        className="mt4 mb3 dim w4 pa2 br3 bw1 b--green 
                        navy pointer bg-green">
                            Submit
                    </Button>
                </div>
                <div className="w25 ml3 mt5 pl5 f3">
                    <p>LinkedIn</p>
                    <a href="https://www.linkedin.com/company/novadsa/?originalSubdomain=tr"><img alt="top_icon" src={Linkedin} className="pointer w2   br3"/></a>
                    <p>Instagram</p>
                    <a href="https://www.instagram.com/nova_dsa/"><img alt="top_icon" src={Instagram} className="pointer w2   br3"/></a>
                    <p>Twitter</p>
                    <a href="https://twitter.com/nova_dsa"><img alt="top_icon" src={Twitter} className="pointer w2   br3"/></a>
                </div>
            </div>
        </div>
    );
  }


  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

}

export default Contact;