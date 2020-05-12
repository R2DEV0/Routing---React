import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Hello from './components/hello';
import Home from './components/home';
import HelloColor from './components/hellocolor';


function App() {


  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <Hello path= "/:input"/>
        <HelloColor path="/:word/:color/:color2"/>
      </Router>

    </div>
  );
}

export default App;
