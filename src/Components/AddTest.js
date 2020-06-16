import React from 'react';
import './AddTest.css';
import Input from './Reusable Components/Input.js';
import {useDispatch, useSelector} from 'react-redux'
import {formHandler, showSubmitMessage} from '../actions/index.js'

const AddTest = (props) => {
  const dispatch = useDispatch()
  const testNameValue = useSelector(state => state.FormHandlerReducer.testNameToAdd)

  const submit = (event, testNameValue) => {
    event.preventDefault();
    console.log("Submit Clicked")
    props.AddTestSubmitBtnHandler(event, testNameValue)
    dispatch(showSubmitMessage())
  }

  return(
    <div>
      <div className='addTestHeaderImage'></div>
      <div className='mainContainer'>
      <h1>Add Test</h1>

        {/* <form className='test' onSubmit={(event) => props.AddClassSubmitBtnHandler(event, classValue)}> */}

        <form 
          // onSubmit={props.AddTestSubmitBtnHandler}
          // onSubmit={(event) => props.AddTestSubmitBtnHandler(event, testNameValue)}
          onSubmit={(event) => submit(event, testNameValue)}
          className='addTestForm'
        >
          <label> 
              <select className='select' name="selectedClass" onChange={props.FormHandler}>
                <option>Class Name:</option> 
                {props.entireState.classes.map((classes, idx) => (
                  <option key={classes.classTitle} value={idx}>
                    {classes.classTitle}
                  </option>
                ))}
              </select>
          </label>
          <br/>
          <Input
            placeholder='Chapter 1 test'
            name='testNameToAdd'
            // onChangeFunc={props.FormHandler}
            onChangeFunc={(event) => dispatch(formHandler(event))}
            // value={props.entireState.testNameToAdd}
            value={testNameValue}
            label="Test I'm Studying For"
          />
          <br/>
          <input className='button' type="submit" value="Submit" />
        </form>
      </div>
      
    </div>
  )
};

export default AddTest;