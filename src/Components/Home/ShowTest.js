import React from 'react';
import ShowStudySessions from './ShowStudySessions.js';
import './ShowTest.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {toggleShowStudySessions} from '../../actions/index.js'

// 12/05: we are getting errors when we: refresh > home > click on historyRedux (this should have no tests or study sessions attached to it yet) > error..... we want this to send a message says no data to display, or on the home page next to the name it should say no data to display and be un-clickable. 

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

  let listItems = testNameArray.map((testName, testIdx) =>{

    let StudySession = null
    // let testGradeOrStudyTime = `Total Time Studied for this test: ${testInfo.totalTimeStudiedPerTest}`
    let testGradeOrStudyTime = `Work on line 33 in showTest.js`

    let selectedTestId = 'test'+testIdx
    
    if(Object.keys(allStudySessions).length > 0 && allStudySessions[classId][selectedTestId].showStudySessions){
      // 11/21: Now add study session, then go to home page. Clicking on the class name will show you the tests. Clicking on the tests will change the showStudySession property of the selected test to true in studysessionHandler.
      
      StudySession = <ShowStudySessions
        studySessions={{classId: classId, testId: selectedTestId}}
      />
    }

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
  });

  return(
    <div>
      {listItems}
    </div>
  )
};

export default ShowTests;