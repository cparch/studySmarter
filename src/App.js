import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';


import './App.css';
import Nav from './Components/Nav.js';
import Home from './Components/Home/Home.js';
import AddClass from './Components/AddClass.js';
import AddStudySession from './Components/AddStudySession.js';
import AddTest from './Components/AddTest.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Switch>
          <Route 
            exact
            path='/' 
            render={(props) => <Home/>}
          />
          <Route 
            path='/addstudysession' 
            render={(props) => <AddStudySession />}
          />
          <Route
            path='/addclass'
            render={(props) => <AddClass {...props}/>}
          />
          <Route
            path='/addtest'
            render={(props) => <AddTest/>}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
