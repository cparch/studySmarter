import React from 'react';
import './AddGrade.css';
import Input from './Reusable Components/Input.js';
import {useDispatch, useSelector} from 'react-redux'
import {formHandler, showSubmitMessage} from '../actions/index.js'

const AddGrade = (props) => {
  const dispatch = useDispatch()
  const gradeValue = useSelector(state => state.FormHandlerReducer.gradeInput)

  const submit = (event, gradeValue) => {
    event.preventDefault();
    console.log("Submit Clicked")
    props.AddGradeHandler(event, gradeValue)
    dispatch(showSubmitMessage())
  }

  return(
    <div>
      <div className='headerImage'/>
      <div className='mainContainer'>
        <h1>
          Add test grade!!!
        </h1>
        {/* <form onSubmit={(event) => props.AddGradeHandler(event, gradeValue)}> */}
        <form onSubmit={(event) => submit(event, gradeValue)}>


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
            //  onChangeFunc={props.FormHandler}
             onChangeFunc={(event) => dispatch(formHandler(event))}
            //  value={props.entireState.gradeInput}
            value={gradeValue}
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