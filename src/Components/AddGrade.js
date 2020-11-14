import React from 'react';
import './AddGrade.css';
import Input from './Reusable Components/Input.js';
import {useDispatch, useSelector} from 'react-redux'
import {formHandler, showSubmitMessage, addTestGrade} from '../actions/index.js'

const AddGrade = (props) => {
  const dispatch = useDispatch()
  const gradeValue = useSelector(state => state.FormHandlerReducer.gradeInput)
  const classID = useSelector(state => state.FormHandlerReducer.selectedClass)
  const testID = useSelector(state => state.FormHandlerReducer.selectedTest)

  const classIdList = useSelector(state => state.classesReducer.allID)
  const classNameObj = useSelector(state => state.classesReducer.byID)

  console.log('classIdList: ', classIdList)
  console.log('classNameObj: ', classNameObj)

  const testList = useSelector(state => state.testReducer)

  console.log("testList: ", testList)




  const submit = (event, gradeValue) => {
    event.preventDefault();
    props.AddGradeHandler(event, gradeValue)
    // this is where we will add the new grade to redux
    dispatch(addTestGrade(gradeValue, classID, testID))
    dispatch(showSubmitMessage())
  }
  // 11/7: working on adding the test grade to redux. The test drop down isn't getting the correct info. It's always showing the tests for class0 even when class1 is selected. To start, class1 should have no options for test name: similar to add study session page > select class historyRedux > then open test name drop down. There are no classes there and the only thing in the drop down is test name. Fix the test drop down below to behave similarly. Then after that you can continue working on testGradeHandler.js

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
            {/* <select name="selectedClass" onChange={props.FormHandler}> */}
            <select name="selectedClass" onChange={(event) => dispatch(formHandler(event))}>
            <option>Class Name:</option> 
              {/* {props.entireState.classes.map((classes, idx) => (
                <option  key={classes.classTitle} value={idx}>
                  {classes.classTitle}
                </option>
              ))} */}
              {classIdList.map((classId, idx) => (

                <option  key={classNameObj[classId].classTitle} value={idx}>
                  {classNameObj[classId].classTitle}
                </option>
              ))}
            </select>
          </label>
          <br></br>
          <label>
            {/* <select name="selectedTest" onChange={props.FormHandler}>  */}
            <select name="selectedTest" onChange={(event) => dispatch(formHandler(event))}> 
              <option>Test Name:</option> 
                {/* {props.tests.map((test, idx) => (
                  <option key={test.testName} value={idx}>
                    {test.testName}
                  </option>
                ))} */}

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