import React from 'react';
import TimeSelector from './TimeSelector.js';

const AddStudySession = (props) => {
  return(
    <div>
      <p>Add Study Session!!!!!!</p>
      <form>
        <label>
          Class Name:

          <select> 
            {props.classes.map((classes) => (
              <option  key={classes.classTitle}>
                {classes.classTitle}
              </option>
            ))}
          </select>
        </label>
        <br></br>
        <br></br>

        <label>
          Test Name:
          <select> 
              {props.tests.map((test) => (
                <option key={test.testName}>
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
          />
        </label>

        <br/>
        <br/>


        <label>
          End:
          <TimeSelector
            TimeValue={props.startTimeValue}
          />
        </label>

        <br/>
        <br/>


        <label>
          Notes:
          <input 
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