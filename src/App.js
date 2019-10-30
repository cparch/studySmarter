import React from 'react';
import logo from './logo.svg';

import './App.css';
import Nav from './Components/Nav.js';
import Home from './Components/Home/Home.js';
import AddClass from './Components/AddClass.js';
import AddStudySession from './Components/AddStudySession.js';
import AddTest from './Components/AddTest.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <AddClass/>
      <AddStudySession/>
      <AddTest/>
    </div>
  );
}

export default App;
