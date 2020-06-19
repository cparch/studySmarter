import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Duration from 'duration';
import $ from 'jquery';

import './App.css';
import Nav from './Components/Navigation/Nav.js';
import Home from './Components/Home/Home.js';
import AddClass from './Components/AddClass.js';
import AddStudySession from './Components/StudySession/AddStudySession.js';
import AddTest from './Components/AddTest.js';
import AddGrade from './Components/AddGrade';
import StudyInsights from './Components/StudyInsights/StudyInsights.js'
import moment from 'moment';
import SideDrawer from './Components/Navigation/SideDrawer.js'
import SubmitAlert from './Components/Reusable Components/SubmitAlert/SubmitAlert.js'
// import {useSelector} from 'react-redux'

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
              grade: 'B',
              totalTimeStudiedPerTest: "3:09",
              studySession: [
                {
                  endTimeToDisplay: "5:50 PM",
                  endTime: "17:50",
                  notes: "test",
                  startTimeToDisplay: "1:50 PM",
                  startTime: "13:50",
                  studySessionNum: 'psychT1 - study session 0',
                  studySessionDuration: "1:00"
                },
                {
                  endTimeToDisplay: "8:20 am",
                  endTime: "08:20",
                  notes: "test",
                  startTimeToDisplay: "6:50 AM",
                  startTime: "06:50",
                  studySessionNum: 'psychT1 - study session 1',
                  studySessionDuration: "2:00"
                },
                {
                  endTimeToDisplay: "6:15 AM",
                  endTime: "06:15",
                  notes: "test",
                  startTimeToDisplay: "6:20 AM",
                  startTime: "06:20",
                  studySessionNum: 'psychT1 - study session 1',
                  studySessionDuration: "0:09"
                }
              ],
            },
            {
              testName: 'psychT2',
              homePageShowStudySessions: false,
              grade: 'A',
              totalTimeStudiedPerTest: "3:00",
              studySession: [
                {
                  endTimeToDisplay: "1:50 PM",
                  endTime: "13:50",
                  notes: "test",
                  startTime: "13:00",
                  startTimeToDisplay: "1:00 PM",
                  studySessionNum: 'psychT2 - study session 0',
                  studySessionDuration: "0:50"
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
              grade: 'A',
              totalTimeStudiedPerTest: "4:00",
              studySession: [
                {
                  endTimeToDisplay: "6:46 AM",
                  endTime: "6:46",
                  notes: "test",
                  startTime: "6:10",
                  startTimeToDisplay: "6:10 AM",
                  studySessionNum: 'histT1 - study session 0',
                  studySessionDuration: "4:00"
                }
              ],
            },
            {
              testName: 'HistT2',
              homePageShowStudySessions: false,
              grade: 'A',
              totalTimeStudiedPerTest: "2:46",
              studySession: [
                {
                  endTimeToDisplay: "5:46 PM",
                  endTime: "17:46",
                  notes: "test",
                  startTime: "15:00",
                  startTimeToDisplay: "3:00 PM",
                  studySessionNum: 'histT2 - study session 0',
                  studySessionDuration: "2:46"
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
      showSubmitConfirmation: false,
    }

    this.FormHandler = this.FormHandler.bind(this);
    this.handleStudySessionStartTime = this.handleStudySessionStartTime.bind(this);
    this.handleStudySessionEndTime = this.handleStudySessionEndTime.bind(this);
    this.addStudySessionSubmitBtnHandler = this.addStudySessionSubmitBtnHandler.bind(this);
    this.AddClassSubmitBtnHandler = this.AddClassSubmitBtnHandler.bind(this);
    this.AddTestSubmitBtnHandler = this.AddTestSubmitBtnHandler.bind(this);
    this.homePageShowClassInfo = this.homePageShowClassInfo.bind(this);
    this.homePageShowTestStudySessions = this.homePageShowTestStudySessions.bind(this);
    this.Duration = this.Duration.bind(this);
    this.AddGradeHandler = this.AddGradeHandler.bind(this);
    this.studyTimePerTest = this.studyTimePerTest.bind(this);
    this.submitAcknowledged = this.submitAcknowledged.bind(this);
  }

  // getAllData(){
  //   fetch("http://localhost:3444/getalldata")
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       this.state.classes = result
  //     console.log("results: ", result)
  //     },
  //     (error) => {
  //       console.log("error")
  //     }
  //   )
  // }

  submitAcknowledged(){
    this.setState({showSubmitConfirmation: false})
  }

  studyTimePerTest(classIdx, testIdx, updateClasses){ 
    //need to pass in updateClasses argument as this will have updated info that the current state does not have.
    let endDate = new Date(0,0,0);

    updateClasses[classIdx].test[testIdx].studySession.forEach(studySession => {
      let timeSplit= studySession.studySessionDuration.split(':');
      endDate.setHours(endDate.getHours() + Number(timeSplit[0]))
      endDate.setMinutes(endDate.getMinutes() + Number(timeSplit[1]))
    })
    return new Duration(new Date(0, 0, 0), endDate).toString("%Hs:%M");
  }

  Duration(startArr, endArr){
    //The parameteres are times that are pre-split 10:00am, 11:00am ([10, 00], [11, 00])
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
      startTimeToDisplay: this.state.SelectedStartTimeValueToDisplay,
      endTimeToDisplay: this.state.SelectedEndTimeValueToDisplay,
      notes: this.state.notes,
      studySessionDuration: this.Duration(startTimeSplit, endTimeSplit)
    })

    updateClasses[this.state.selectedClass].test[this.state.selectedTest].totalTimeStudiedPerTest = this.studyTimePerTest(this.state.selectedClass, this.state.selectedTest,updateClasses)

    this.setState({
      classes: updateClasses,
      notes: '',
      SelectedStartTimeValue: '',
      SelectedEndTimeValue: '',
      startTimeValue: moment(),
      endTimeValue: moment(),
      showSubmitConfirmation: true,
    })

    // $.ajax({
    //   type: "POST",
    //   url: "http://localhost:3444/addNewStudySession",
    //   data:{
    //     classTitle: this.state.classes[Number(this.state.selectedClass)].classTitle,
    //     testIdx: this.state.selectedTest,
    //     endTimeToDisplay: this.state.SelectedEndTimeValueToDisplay,
    //     endTime: this.state.SelectedEndTimeValue,
    //     notes: this.state.notes,
    //     startTimeToDisplay: this.state.SelectedStartTimeValueToDisplay,
    //     startTime: this.state.SelectedStartTimeValue,
    //     studySessionNum: updateClasses[this.state.selectedClass].test[this.state.selectedTest].studySession.length,
    //     studySessionDuration: this.Duration(startTimeSplit, endTimeSplit)
    //   },
    //   success: function(response){
    //     console.log("Response addClass: ", response)
        
    //   },
    // })
    // this.getAllData()
  }

  AddGradeHandler(event, gradeValue){
    event.preventDefault(); 
    let updateClasses = this.state.classes
    // updateClasses[this.state.selectedClass].test[this.state.selectedTest].grade = this.state.gradeInput
    updateClasses[this.state.selectedClass].test[this.state.selectedTest].grade = gradeValue

    this.setState({
      classes: updateClasses,
      gradeInput: '',
      showSubmitConfirmation: true,
    })

    
    // let test = {
    //   classTitle: this.state.classes[Number(this.state.selectedClass)].classTitle,
    //   testIdx: Number(this.state.selectedTest),
    //   grade: this.state.gradeInput
    // }
    // debugger

    $.ajax({
      type: "POST",
      url: "http://localhost:3444/addNewTestGrade",
      data:{
        classTitle: this.state.classes[Number(this.state.selectedClass)].classTitle,
        testIdx: Number(this.state.selectedTest),
        grade: this.state.gradeInput
      },
      success: function(response){
        console.log("Response addClass: ", response)
        
      },
    })
    // this.getAllData()
  }

  handleStudySessionEndTime(value) {
    this.setState({ 
      endTimeValue: value,
      // [value.target.name]: value,
      SelectedEndTimeValueToDisplay: value && value.format('LT'),
      SelectedEndTimeValue: value && value.format('HH:mm')
    });
  }

  handleStudySessionStartTime(value) {
    // console.log("hello frp, startTimeFunc")
    // console.log(value && value.format('LT'))
    // console.log(value && value.format('HH:mm'))
    // console.log(value)

    this.setState({ 
      startTimeValue: value,
      // [event.target.name]: value && value.format('HH:mm')
      SelectedStartTimeValueToDisplay: value && value.format('LT') ,
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

  AddTestSubmitBtnHandler(event, testName) {
    event.preventDefault();
    let updateClasses = this.state.classes;

    updateClasses[this.state.selectedClass].test.push({
      // testName: this.state.testNameToAdd,
      testName: testName,
      studySession: [], 
      grade: '',
      totalTimeStudiedPerTest: "0:00",
    })

    this.setState({
      classes: updateClasses,
      testNameToAdd: '',
      showSubmitConfirmation: true,
      
    })

    // $.ajax({
    //   type: "POST",
    //   url: "http://localhost:3444/addNewTest",
    //   data:{
    //     classTitle: this.state.classes[Number(this.state.selectedClass)].classTitle,
    //     testName: this.state.testNameToAdd,
    //     homePageShowStudySessions: false,
    //     grade: "",
    //     totalTimeStudiedPerTest: "0:00",
    //     studySession: []
    //   },
    //   success: function(response){
    //     console.log("Response addClass: ", response)
        
    //   },
    // })
    // this.getAllData()
  };

  AddClassSubmitBtnHandler(event, newClassName) {
    event.preventDefault();
    const updateClasses = [...this.state.classes];
    updateClasses.push({
      // classTitle: this.state.classNameToAdd, //before redux
       classTitle: newClassName, 
      test:[],
      homePageShowClassInfo: false,
    })

    this.setState({
      classes: updateClasses,
      classNameToAdd: '',
      showSubmitConfirmation: true,
    })

    // $.ajax({
    //   type: "POST",
    //   url: "http://localhost:3444/addClass",
    //   data:{
    //     classTitle: this.state.classNameToAdd
    //   },
    //   success: function(response){
    //     console.log("Response addClass: ", response)
    //   },
    // })
  }

  FormHandler(event) {
    console.log("hello test 2")
    // console.log(event.target)
    // console.log(event.target.value)
    // debugger
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // getAllData(){
  //   fetch("http://localhost:3444/getalldata")
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       this.state.classes = result
  //     console.log("results: ", result)
  //     this.setState({classes: result})
  //     },
  //     (error) => {
  //       console.log("error")
  //     }
  //   )
  // }

  componentDidMount(){
    // this.getAllData()
  }



  render(){

    return (
      <BrowserRouter>
        <div>
          <div className='nav'>
            <Nav/>
          </div>
          <SideDrawer/>
          
          <div className='main'>
          <SubmitAlert
            showSubmitConfirmation={this.state.showSubmitConfirmation}
            submitAcknowledged={this.submitAcknowledged}
          />
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
              entireState = {this.state}
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
                AddClassSubmitBtnHandler={this.AddClassSubmitBtnHandler}
                classNameToAdd={this.state.classNameToAdd}
              />}
            />
            <Route
              path='/addtest'
              render={(props) => 
              <AddTest
                entireState={this.state}
                FormHandler={this.FormHandler}
                AddTestSubmitBtnHandler={this.AddTestSubmitBtnHandler}
              />}
            />

            <Route
              path='/AddGrade'
              render={(props) => 
              <AddGrade
              entireState={this.state}
                FormHandler={this.FormHandler}
                tests={this.state.classes[this.state.selectedClass].test}
                AddGradeHandler = {this.AddGradeHandler}
              />}
            /> 

            <Route
              path='/StudyInsights'
              render={(props) => 
              <StudyInsights
                classes = {this.state.classes}
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
