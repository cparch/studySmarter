import React from 'react';
import ShowStudySessions from './ShowStudySessions.js';
import './ShowTest.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {toggleShowStudySessions} from '../../actions/index.js'


const ShowTests = (props) => {
  
  const dispatch = useDispatch()
  let testList = useSelector(state => state.testReducer[props.classId])
  let allStudySessions = useSelector(state => state.studySessionReducer)
  let testNameArray = [];
  let classId = props.classId
  debugger
  

  // this gathers all the test names for the selected class and puts them in an array
  for(const classObj in testList){
    testNameArray.push(testList[classObj].testTitle)
  }

  let listItems = null;
  // if no test for this class, else show tests
  if(testNameArray.length === 0){
    listItems =  <div className='testName'> You have not added any tests. Please add a test.</div> 
  } else {
     listItems = testNameArray.map((testName, testIdx) =>{

      let StudySession = null
      // let testGradeOrStudyTime = `Total Time Studied for this test: ${testInfo.totalTimeStudiedPerTest}`
      let testGradeOrStudyTime = `Work on line 33 in showTest.js`
  
      let selectedTestId = 'test'+testIdx
      if(allStudySessions[classId][selectedTestId]){
        // 11/21: Now add study session, then go to home page. Clicking on the class name will show you the tests. Clicking on the tests will change the showStudySession property of the selected test to true in studysessionHandler.
        StudySession = <ShowStudySessions
          studySessions={{classId: classId, testId: selectedTestId}}
        />
      
  
        // if(testInfo.grade){
        //   testGradeOrStudyTime = `Grade: ${testInfo.grade}`
        // }

        return(
          <div 
            className='testName'
            onClick={() => dispatch( toggleShowStudySessions(classId, selectedTestId))}
            key={testName}
          >
            {testName}: {testGradeOrStudyTime}
            {StudySession}
          </div> 
        )
      } else {
        return(
          <div 
            className='testName'
            key={testName}
          >
            {testName}: No Study Session info to display. Please add a study session.
            
          </div> 
        )  
      }
    });
  }



  return(
    <div>
      {listItems}
    </div>
  )
};

export default ShowTests;