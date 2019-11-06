import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Duration from 'duration';

import './App.css';
import Nav from './Components/Nav.js';
import Home from './Components/Home/Home.js';
import AddClass from './Components/AddClass.js';
import AddStudySession from './Components/StudySession/AddStudySession.js';
import AddTest from './Components/AddTest.js';
import AddGrade from './Components/AddGrade';
import moment from 'moment';

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
              grade: '',
              studySession: [
                {
                  endTime: "17:50",
                  notes: "test",
                  startTime: "13:50",
                  studySessionNum: 'psychT1 - study session 0',
                  studyDuration: "1:00"
                },
                {
                  endTime: "08:20",
                  notes: "test",
                  startTime: "06:50",
                  studySessionNum: 'psychT1 - study session 1',
                  studyDuration: "2:00"
                },
                {
                  endTime: "06:15",
                  notes: "test",
                  startTime: "06:20",
                  studySessionNum: 'psychT1 - study session 1',
                  studyDuration: "0:09"
                }
              ],
            },
            {
              testName: 'psychT2',
              homePageShowStudySessions: false,
              grade: '',
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
              grade: '',
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
              grade: '',
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
      selectedClass: 0,
      selectedTest: 0,
      startTimeValue: moment(),
      SelectedStartTimeValue: '',
      endTimeValue: moment(),
      SelectedEndTimeValue: '',
      notes: '',
      classNameToAdd: '',
      testNameToAdd: '',
      gradeInput: '',
    }

    this.FormHandler = this.FormHandler.bind(this);
    this.handleStudySessionStartTime = this.handleStudySessionStartTime.bind(this);
    this.handleStudySessionEndTime = this.handleStudySessionEndTime.bind(this);
    this.addStudySessionSubmitBtnHandler = this.addStudySessionSubmitBtnHandler.bind(this);
    this.AddClassSubitBtnHandler = this.AddClassSubitBtnHandler.bind(this);
    this.AddTestSubmitBtnHandler = this.AddTestSubmitBtnHandler.bind(this);
    this.homePageShowClassInfo = this.homePageShowClassInfo.bind(this);
    this.homePageShowTestStudySessions = this.homePageShowTestStudySessions.bind(this);
    this.Duration = this.Duration.bind(this);
    this.AddGradeHandler = this.AddGradeHandler.bind(this);
    this.studyTimePerTest = this.studyTimePerTest.bind(this);
  }

  /* the func below will calculate the total amount of time a student has spent studying for a tests.
  I am calling this manually in this file on line 287
  the next step will be to call this function when a test if clicked from teh home page.
  when you click on a test name from the home page, that should activate this function
  and the return should auto populate the state
  with the new state we should be able to print out the total amount of time studied

   */

  studyTimePerTest(classIdx, testIdx){ 
    let updatedClass = [...this.state.classes];
    let totalTime = 0;

    updatedClass[classIdx].test[testIdx].studySession.map(studySession => {

      let timeSplit= studySession.studyDuration.split(':')
      let hoursToMin = Number(timeSplit[0]) * 60
      let hoursPlusMin = hoursToMin + Number(timeSplit[1])

      totalTime += hoursPlusMin
    })

    //Now we have a total number if mintes.
    // next we need to bring it back to an hour format

    let totalMinToHr = totalTime/60
    //330 min / 60 min = 5.5 hr


    if(totalMinToHr.toString().indexOf('.') === -1){
      //if there is no decimal aka the total min is evenly divisable by 60 min. e.g. 300 min / 60 min = 5 hr
      return totalMinToHr.toString() + ':00'

    } else {
      //if there is a decimal when you divde the total min by 60 (e.g 332 min / 60 min = 5.5333 hr)
      let totalMinToHrSplit = totalMinToHr.toString().split('.')
      // split to [5, 5333]

      let num = Number('.' + totalMinToHrSplit[1]).toFixed(2).split('.')
    

      console.log('line 157 num', num)

      num[1] = (num[1] * .60).toFixed(0).toString()
      //.53 * .60 = 

      if(num[1].toString().length === 1){
        num[1] = '0' + num[1].toString()
      }

      totalMinToHrSplit[1] = num[1]
      //[5, 53]

      return totalMinToHrSplit.join(':')
      //return 5:53
    }
  }

  Duration(startArr, endArr){
    // console.log("times given to Duration", startArr, endArr)
    let duration = new Duration(new Date(0, 0, 0, startArr[0], startArr[1]), new Date(0, 0, 0, endArr[0], endArr[1]));
    return duration.toString("%Hs:%M")
  }

  addStudySessionSubmitBtnHandler = (event) => {
    event.preventDefault();

    let startTimeSplit = this.state.SelectedStartTimeValue.split(':');
    let endTimeSplit = this.state.SelectedEndTimeValue.split(':')

    const updateClasses = [...this.state.classes];
    
    updateClasses[this.state.selectedClass].test[this.state.selectedTest].studySession.push({
      studySessionNum: updateClasses[this.state.selectedClass].test[this.state.selectedTest].studySession.length,
      startTime: this.state.SelectedStartTimeValue,
      endTime: this.state.SelectedEndTimeValue,
      notes: this.state.notes,
      studyDuration: this.Duration(startTimeSplit, endTimeSplit)

    })

    this.setState({
      classes: updateClasses
    })
  }

  AddGradeHandler(event){
    event.preventDefault(); 
    let updateClasses = this.state.classes
    updateClasses[this.state.selectedClass].test[this.state.selectedTest].grade = this.state.gradeInput
    this.setState({classes: updateClasses})
  }

  handleStudySessionEndTime(value) {
    this.setState({ 
      endTimeValue: value,
      // [value.target.name]: value,
      SelectedEndTimeValue: value && value.format('HH:mm')
    });
  }

  handleStudySessionStartTime(value) {
    this.setState({ 
      startTimeValue: value,
      // [event.target.name]: value && value.format('HH:mm')
      SelectedStartTimeValue: value && value.format('HH:mm')
    });
  }

  homePageShowTestStudySessions(classIdx, testIdx){
    let updateClasses = [...this.state.classes]
    updateClasses[classIdx].test[testIdx].homePageShowStudySessions = !updateClasses[classIdx].test[testIdx].homePageShowStudySessions

    this.setState({
      classes: updateClasses
    })
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
      grade: '',
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

    console.log("line 243", this.studyTimePerTest(0,0))
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <div className='main'>
          <Switch >
            <Route 
              exact
              path='/' 
              render={(props) => 
              <Home
                classList={this.state.classes}
                homePageShowClassInfo={this.homePageShowClassInfo}
                homePageShowTestStudySessions={this.homePageShowTestStudySessions}
              />}
            />
            <Route 
              path='/addstudysession' 
              render={(props) => 
              <AddStudySession 
              classes={this.state.classes}
              tests={this.state.classes[this.state.selectedClass].test}
              startTimeValue={this.state.startTimeValue}
              endTimeValue={this.state.endTimeValue}
              handleStudySessionStartTime={this.handleStudySessionStartTime}
              handleStudySessionEndTime={this.handleStudySessionEndTime}
              FormHandler={this.FormHandler}
              addStudySessionSubmitBtnHandler={this.addStudySessionSubmitBtnHandler}
              // EndTimeValue ={this.state.SelectedEndTimeValue}
              />}
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

            <Route
              path='/AddGrade'
              render={(props) => 
              <AddGrade
                classes={this.state.classes}
                FormHandler={this.FormHandler}
                tests={this.state.classes[this.state.selectedClass].test}
                AddGradeHandler = {this.AddGradeHandler}

              />}
            />  
          </Switch>
          </div> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
