import React from 'react';
import './AddGrade.css';
import Input from './Reusable Components/Input.js';

const AddGrade = (props) => {
  return(
    <div>
      <div className='headerImage'/>
      <div className='mainContainer'>
        <h1>
          Add test grade!!!
        </h1>

        <form onSubmit={props.AddGradeHandler}>
          <label>
            <select name="selectedClass" onChange={props.FormHandler}> 
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
            <select name="selectedTest" onChange={props.FormHandler}> 
              <option>Test Name:</option> 
                {props.tests.map((test, idx) => (
                  <option key={test.testName} value={idx}>
                    {test.testName}
                  </option>
                ))}
            </select>
          </label>
          <br></br>
          <Input
             placeholder='A'
             name='gradeInput' 
             onChangeFunc={props.FormHandler}
             value={props.entireState.gradeInput}
             label='Grade'
          />
          <br></br>
          <input className='button' type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default AddGrade;