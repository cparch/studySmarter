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

  //test list
  let testObj = useSelector(state => state.testReducer);
  let classesObj = useSelector(state => state.classesReducer);
  let selectedClass = useSelector(state => state.FormHandlerReducer.selectedClass)
  
  let testListObj = testObj[classesObj.allID[selectedClass]];
  let chosenClassTestList = []

  for(const key in testListObj){
    chosenClassTestList.push(testListObj[key].testTitle)
  }

  console.log('chosenClassTestList: ', chosenClassTestList)




  const submit = (event, gradeValue) => {
    event.preventDefault();
    props.AddGradeHandler(event, gradeValue)
    // this is where we will add the new grade to redux
    dispatch(addTestGrade(gradeValue, classID, testID))
    dispatch(showSubmitMessage())
  }

  return(
    <div>
      <div className='headerImage'/>
      <div className='mainContainer'>
        <h1>
          Add test grade!!!
        </h1>
        <form onSubmit={(event) => submit(event, gradeValue)}>
          <label>
            <select name="selectedClass" onChange={(event) => dispatch(formHandler(event))}>
            <option>Class Name:</option> 
              {classIdList.map((classId, idx) => (
                <option  key={classNameObj[classId].classTitle} value={idx}>
                  {classNameObj[classId].classTitle}
                </option>
              ))}
            </select>
          </label>
          <br></br>
          <label>
            <select className='selectedTest' name="selectedTest" onChange={(event) => dispatch(formHandler(event))}> 
              <option>Test Name:</option> 
                {chosenClassTestList.map((testName, idx) => (
                  <option key={testName} value={idx}>
                    {testName}
                  </option>
                ))}
            </select>
          </label>
          <br></br>
          <Input
             placeholder='A'
             name='gradeInput' 
             onChangeFunc={(event) => dispatch(formHandler(event))}
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