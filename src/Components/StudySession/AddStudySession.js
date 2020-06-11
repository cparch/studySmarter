import React from 'react';
import './AddStudySession.css';
import TimeSelector from './TimeSelector.js';
import 'rc-time-picker/assets/index.css';
import {useDispatch, useSelector} from 'react-redux'
import {formHandler, studySessionStartTime, startTimeHandler} from '../../actions/index.js'

const AddStudySession = (props) => {

  const dispatch = useDispatch()
  const notesValue = useSelector(state => state.FormHandlerReducer.notes)
  let startTimeValue = useSelector(state => state.FormHandlerReducer.SelectedStartTimeValueToDisplay)


  return(
    <div>
      <div className='AddStudySessionHeaderImage'></div>
      <div className='mainContainer'>
        <h1>Add Study Session</h1>
        <form onSubmit={props.addStudySessionSubmitBtnHandler}>
          <label>
            {/* <select name="selectedClass" onChange={props.FormHandler}>  */}
            <select name="selectedClass" onChange={(event) => dispatch(formHandler(event))}> 
            {/* <select name="selectedClass" onChange={() => console.log("test 10:36")}>  */}
            <option>Class Name:</option> 
              {props.entireState.classes.map((classes, idx) => (
                <option  key={classes.classTitle} value={idx}>
                  {classes.classTitle}
                </option>
              ))}
            </select>
          </label>
          <br></br>
          <label>
            {/* <select name="selectedTest" onChange={props.FormHandler}>  */}
            <select name="selectedTest" onChange={(event) => dispatch(formHandler(event))}> 


            <option>Test Name:</option> 
                {props.tests.map((test, idx) => (
                  <option key={test.testName} value={idx}>
                    {test.testName}
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
                onChange={props.FormHandler}
                name="notes"
                type="text" 
                value= {props.entireState.notesValue}
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