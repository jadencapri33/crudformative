import React from 'react';

import './App.css';

import Home from "./components/Home"
import Getdata from "./components/Getdata"
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

import { Router } from "@reach/router";


function App() {
  return (
    <div className="App">
      
    
      

      <Router>
      
      <Home path="/" />
      <Getdata path="/getdata"/>
      <Adduser path="/addusers"/>
      <Edituser path="/editusers/:id" />
      
      
      
      
      </Router>
        
      
    </div>
  );
}

export default App;

