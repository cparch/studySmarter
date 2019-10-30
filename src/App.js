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
        {
          classTitle: "Psychology101",
          test:[
            {
              testName: 'psychT1',
              homePageShowStudySessions: false,
              studySession: [
                {
                  endTime: "17:50",
                  notes: "test",
                  startTime: "13:50",
                  studySessionNum: 'psychT1 - study session 0',
                  studyDuration: "4:00"
                }
              ],
            },
            {
              testName: 'psychT2',
              homePageShowStudySessions: false,
              studySession: [
                {
                  endTime: "13:00",
                  notes: "test",
                  startTime: "13:50",
                  studySessionNum: 'psychT2 - study session 0',
                  studyDuration: "0:50"
                }
              ],
            }
          ]
        },
        {
          classTitle: "History101",
          test:[
            {
              testName: 'histT1',
              homePageShowStudySessions: false,
              studySession: [
                {
                  endTime: "6:46",
                  notes: "test",
                  startTime: "6:10",
                  studySessionNum: 'histT1 - study session 0',
                  studyDuration: "0:36"
                }
              ],
            },
            {
              testName: 'HistT2',
              homePageShowStudySessions: false,
              studySession: [
                {
                  endTime: "17:46",
                  notes: "test",
                  startTime: "15:00",
                  studySessionNum: 'histT2 - study session 0',
                  studyDuration: "2:46"
                }
              ],
            }
          ]
        },
      ],
      classNameToAdd: '',
      testNameToAdd: '',
      selectedClass: 0,
    }
    this.homePageShowClassInfo = this.homePageShowClassInfo.bind(this);
    this.FormHandler = this.FormHandler.bind(this);
    this.AddClassSubitBtnHandler = this.AddClassSubitBtnHandler.bind(this);
    this.AddTestSubmitBtnHandler = this.AddTestSubmitBtnHandler.bind(this);
  }


  homePageShowClassInfo(idx){
    let updateClasses = [...this.state.classes]
    updateClasses[idx].homePageShowClassInfo = !updateClasses[idx].homePageShowClassInfo

    this.setState({
      classes: updateClasses
    })
  }

  AddTestSubmitBtnHandler(event) {
    event.preventDefault();
    let updateClasses = this.state.classes;

    updateClasses[this.state.selectedClass].test.push({
      testName: this.state.testNameToAdd,
      studySession: [], 
    })

    this.setState({
      classes: updateClasses,
      testNameToAdd: '',
    })
  };

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
                homePageShowClassInfo={this.homePageShowClassInfo}
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
                AddTestSubmitBtnHandler={this.AddTestSubmitBtnHandler}
              />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
