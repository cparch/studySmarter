import React from 'react';
import ShowStudySessions from './ShowStudySessions.js';
import './ShowTest.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {toggleShowStudySessions} from '../../actions/index.js'


const ShowTests = (props) => {
  const dispatch = useDispatch()
  let testList = useSelector(state => state.testReducer)
  let allStudySessions = useSelector(state => state.studySessionReducer)


  let testNameArray = [];
  let classId = ''
  

  // this gathers all the test names for the selected class and puts them in an array
  for(const classObj in testList){
    classId = classObj
    for(const testObj in testList[classObj]){
      testNameArray.push(testList[classObj][testObj].testTitle)
    }
  }


  // let listItems = props.courseInfo.test.map((testInfo, testIdx) =>{
  let listItems = testNameArray.map((testName, testIdx) =>{

    let StudySession = null
    // let testGradeOrStudyTime = `Total Time Studied for this test: ${testInfo.totalTimeStudiedPerTest}`
    let testGradeOrStudyTime = `Work on line 33 in showTest.js`

    let selectedTestId = 'test'+testIdx

    // console.log("*****SHOW STUDY SESSIONS: ", allStudySessions[classId][selectedTestId].showStudySessions )
    // if(testInfo.homePageShowStudySessions){
    debugger
    if(allStudySessions[classId][selectedTestId].showStudySessions){
      console.log("***** SHOW STUDY Session")
      // 11/21: Now add study session, then go to home page. Clicking on the class name will show you the tests. Clicking on the tests will change the showStudySession property of the selected test to true. below on line 43, we need to figure out what to pass the showStudySessions component to have it display all the study sessions for that test.... merge branch updateStudySessionReducer with branch UpdateHomePage..... merge branch updateHomePage with branch normalizeState
      
    //   StudySession = <ShowStudySessions
    //     studySessions={testInfo.studySession}
    //   />
    } 

    // if(testInfo.grade){
    //   testGradeOrStudyTime = `Grade: ${testInfo.grade}`
    // }
    return(
      <div 
        className='testName'
        // onClick={() => props.homePageShowTestStudySessions(props.classIdx, testIdx)}
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