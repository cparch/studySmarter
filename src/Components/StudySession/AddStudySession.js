import React from 'react';
import TimeSelector from './TimeSelector.js';
import 'rc-time-picker/assets/index.css';

const AddStudySession = (props) => {
  return(
    <div>
      <p>Add Study Session!!!!!!</p>
      <form onSubmit={props.addStudySessionSubmitBtnHandler}>
        <label>
          Class Name:

          <select name="selectedClass" onChange={props.FormHandler}> 
            {props.classes.map((classes, idx) => (
              <option  key={classes.classTitle} value={idx}>
                {classes.classTitle}
              </option>
            ))}
          </select>
        </label>
        <br></br>
        <br></br>

        <label>
          Test Name:
          <select name="selectedTest" onChange={props.FormHandler}> 
              {props.tests.map((test, idx) => (
                <option key={test.testName} value={idx}>
                  {test.testName}
                </option>
              ))}
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Start:
          <TimeSelector
            TimeValue={props.startTimeValue}
            timeHandler={props.handleStudySessionStartTime}
          />
        </label>

        <br/>
        <br/>


        <label>
          End:
          <TimeSelector
            TimeValue={props.endTimeValue}
            timeHandler={props.handleStudySessionEndTime}
          />
        </label>

        <br/>
        <br/>


        <label>
          Notes:
          <input
            onChange={props.FormHandler}
            name="notes"
            type="text" 
          />
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddStudySession;