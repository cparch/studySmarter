import React from 'react';
import './AddGrade.css';

const AddGrade = (props) => {
  return(
    <div>
      <div className='mainContainer'>
        <div className='headerImage'/>
        <h2>
          Add test grade!!!
        </h2>

        {/* <form> */}
        <form onSubmit={props.AddGradeHandler}>
          <label>
            Class Name:

            <select name="selectedClass" onChange={props.FormHandler}> 
              {props.entireState.classes.map((classes, idx) => (
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
            Grade:
            <input 
              type='text' 
              placeholder='A'
              onChange={props.FormHandler}
              name="gradeInput"
              value = {props.entireState.gradeInput}
            />
          </label>
          <br></br>
          <br></br>
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default AddGrade;