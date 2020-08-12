import React from 'react';
import './AddStudySession.css';
import TimeSelector from './TimeSelector.js';
import 'rc-time-picker/assets/index.css';
import {useDispatch, useSelector} from 'react-redux'
import {formHandler, showSubmitMessage, studySessionStartTime, startTimeHandler, addStudySessionDetails} from '../../actions/index.js'
import { startSession } from 'mongoose';

const AddStudySession = (props) => {

  const dispatch = useDispatch();
  const notesValue = useSelector(state => state.FormHandlerReducer.notes);
  let startTimeValue = useSelector(state => state.FormHandlerReducer.SelectedStartTimeValueToDisplay);
  let classesObj = useSelector(state => state.classesReducer);
  let selectedClass = useSelector(state => state.FormHandlerReducer.selectedClass)
  let selectedTest = useSelector(state => state.FormHandlerReducer.selectedTest)

  let testObj = useSelector(state => state.testReducer);
  let notes = useSelector(state => state.FormHandlerReducer.notes);

  let testListObj = testObj[classesObj.allID[selectedClass]];
  let chosenClassTestList = []

  for(const key in testListObj){
    chosenClassTestList.push(testListObj[key].testTitle)
  }


/* 7/7/20 next, when submit is pressed, the function below on line 59 will be invoked. That function needs to add notes to the studySessions obj. For now lets not worry about the times. Let just get the notes to end up in an obj under the correct class and test

take some time a think this through, how will we use it in the end? will it need an array? How will we show these on the home page in order?

v is this a good structure?
const studySessions = {
  "class0": {
    "test0" : {
      notes:studied at walgreens
    },
    "test1" : {
      notes: "studied at start bucks"
    }
  },
  "class1":{
    "test0":{
      notes: studied in the library
    }
  }
}

to build this obj dynamically I would
check the obj, 
  if "class" + selectedClassFromRedux === undefined{
    create it
  } else{
    use that one
  }
once we know we have the class in the obj
check and see if that key value pair has "test" + selectedTestFromRedux
  if it doesn't have that test number add it
  else use it

  add the notes to that studySessions["class" + selectedClassFromRedux]["test" + selectedTestFromRedux]
.*/
  const submit = (event) => {
    event.preventDefault();
    console.log("Submit Clicked")
    props.addStudySessionSubmitBtnHandler(event)
    dispatch(showSubmitMessage())
    dispatch(addStudySessionDetails(selectedClass, selectedTest, notes))
  }

  return(
    <div>
      <div className='AddStudySessionHeaderImage'></div>
      <div className='mainContainer'>
        <h1>Add Study Session</h1>
        {/* <form onSubmit={props.addStudySessionSubmitBtnHandler}> */}
        <form onSubmit={(event) => submit(event)}>
          <label>
            <select name="selectedClass" onChange={(event) => dispatch(formHandler(event))}> 
            <option>Class Name:</option> 
              {classesObj.allID.map((className, idx) => (
                <option  key={classesObj.byID[className].classTitle} value={idx}>
                  {classesObj.byID[className].classTitle}
                </option>
              ))}
            </select>
          </label>
          <br></br>
          <label>
            <select name="selectedTest" onChange={(event) => dispatch(formHandler(event))}> 

            {/* 6/30 loop thorough test list obj via state from redux. I need to take the idx of the class picked above to get the class name and pass the class name to the test list obj so we can display all tests for that class

             v console log below, place it on line 18. Once you pick a class, the console log will log all the tests from that class, but in a obj. 

            console.log(testObj[classesObj.allID[selectedClass]])

            once you have the correct test list obj for the selected class above, you will need to loop through that object and each test name will need to be displayed in the drop down below. line 58 is the old copy, line 59 is the new function we are updating to use redux. line 59 needs to use a for loop to loop through the obj
            */}
            <option>Test Name:</option> 
                {/* {props.tests.map((test, idx) => ( */}
                {/* {props.tests.map((test, idx) => (

                  <option key={test.testName} value={idx}>
                    {test.testName}
                  </option>
                ))} */}

                {chosenClassTestList.map((test, idx) => (
                  <option key={test} value={idx}>
                    {test}
                  </option>
                ))}

            </select>
          </label>
          <br></br>
          
          <div className='timeSelector'>
            <label >
              Start:
              <TimeSelector
                id = "startTimePicker"
                TimeValue={props.startTimeValue}
                timeHandler={props.handleStudySessionStartTime}
                //V redux attempt
                // TimeValue={startTimeValue}
                // timeHandler = {(value) => dispatch(studySessionStartTime(value))}
                // timeHandler = {(value) => dispatch(startTimeHandler(value))}
              />
            </label>
            <label>
              End:
              <TimeSelector
                id = "endTimePicker"
                TimeValue={props.endTimeValue}
                timeHandler={props.handleStudySessionEndTime}
                // timeHandler={() => console.log("end Time")}
              />
            </label>
          </div>
          <br></br>
          <label>
            <div>
              Notes:
            </div>
              <textarea
                // onChange={props.FormHandler}
                onChange={(event) => dispatch(formHandler(event))}
                name="notes"
                type="text" 
                // value= {props.entireState.notesValue}
                value = {notes}
              />
            </label>
          
          <br></br>
          <input className='button' type="submit" value="Submit" />
        </form>
      </div>
    </div>
    
  )
}

export default AddStudySession;