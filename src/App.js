import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import Nav from './Components/Nav.js';
import Home from './Components/Home/Home.js';
import AddClass from './Components/AddClass.js';
import AddStudySession from './Components/AddStudySession.js';
import AddTest from './Components/AddTest.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      classes:[
        {classTitle: "Psychology101",},
        {classTitle: "History101",},
      ],
      classNameToAdd: '',
      testNameToAdd: '',
      selectedClass: 0,
    }
    this.FormHandler = this.FormHandler.bind(this);
    this.AddClassSubitBtnHandler = this.AddClassSubitBtnHandler.bind(this);
  }

  AddClassSubitBtnHandler(event) {
    event.preventDefault();
    const updateClasses = [...this.state.classes];
    updateClasses.push({
      classTitle: this.state.classNameToAdd,
      test:[],
      homePageShowClassInfo: false,
    })

    this.setState({
      classes: updateClasses,
      classNameToAdd: ''
    })
  }

  FormHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Switch>
            <Route 
              exact
              path='/' 
              render={(props) => 
              <Home
                classList={this.state.classes}
              />}
            />
            <Route 
              path='/addstudysession' 
              render={(props) => <AddStudySession />}
            />
            <Route
              path='/addclass'
              render={(props) => 
              <AddClass 
                FormHandler={this.FormHandler}
                AddClassSubitBtnHandler={this.AddClassSubitBtnHandler}
              />}
            />
            <Route
              path='/addtest'
              render={(props) => 
              <AddTest
                classes={this.state.classes}
                FormHandler={this.FormHandler}
              />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
