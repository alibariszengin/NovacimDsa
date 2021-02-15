import React, { Component } from 'react'
import './App.css';
import HomePage from './HomePage';
import Login from './Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {


  render(){
    return (
      <div className="App ">
        <div >
          
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
               
                <HomePage />
                <Login />
                
              </Route>
            </Switch>
          </BrowserRouter>

        </div>

        
      </div>
    );
  }

}

export default App;
