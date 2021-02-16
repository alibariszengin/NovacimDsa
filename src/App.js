import React, { Component } from 'react'
import './App.css';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './AfterLogin/Menu';
import Projects from './AfterLogin/Projects.js';
import Dashboard from './AfterLogin/Dashboard';
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
              <Route exact path="/menu">
                <div className="w-100 vh-100 flex">
                  <Menu/>
                    <Dashboard/>
                </div>
              </Route>
              <Route exact path='/menu/dashboard'>
                  <div className="w-100 vh-100 flex">
                    <Menu/>
                    <Dashboard/>
                  </div>
                  
              </Route>
              <Route exact path='/menu/projects'>
                <div className="w-100 vh-100 flex">
                    <Menu/>
                    <Projects/>
                </div>
                
              </Route>
            </Switch>
          </BrowserRouter>

        </div>

        
      </div>
    );
  }

}

export default App;
