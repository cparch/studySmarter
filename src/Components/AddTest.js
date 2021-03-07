import React from 'react';
import './AddTest.css';
import Input from './Reusable Components/Input.js';
import {useDispatch, useSelector} from 'react-redux'
import {formHandler, showSubmitMessage, addTest} from '../actions/index.js'

const AddTest = (props) => {
  const dispatch = useDispatch()
  const testNameValue = useSelector(state => state.FormHandlerReducer.testNameToAdd)
  const selectedClassId = useSelector(state => state.FormHandlerReducer.selectedClass)
  const allClassIdArr = useSelector(state => state.classesReducer.allID)
  const allClassObj = useSelector(state => state.classesReducer.byID)

  allClassIdArr.map((classID) => (
    console.log(allClassObj[classID].classTitle)    
  ))

  const submit = (event, testNameValue) => {
    event.preventDefault();
    console.log("Submit Clicked")
    props.AddTestSubmitBtnHandler(event, testNameValue)
    dispatch(addTest(selectedClassId, testNameValue))
    dispatch(showSubmitMessage())
  }

  return(
    <div>
      <div className='addTestHeaderImage'></div>
      <div className='mainContainer'>
      <h1>Add Test</h1>
        <form 
          onSubmit={(event) => submit(event, testNameValue)}
          className='addTestForm'
        >
          <label> 
              <select className='select' name="selectedClass" onChange={(event) => dispatch(formHandler(event))}>
                <option>Class Name:</option>

                {allClassIdArr.map((classID) => (
                  <option key={allClassObj[classID].classTitle} value={allClassObj[classID].id}>
                    {allClassObj[classID].classTitle}
                  </option>
                ))}

              </select>
          </label>
          <br/>
          <Input
            placeholder='Chapter 1 test'
            name='testNameToAdd'
            onChangeFunc={(event) => dispatch(formHandler(event))}
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