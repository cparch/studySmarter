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
      let selectedTestId = 'test'+testIdx      
      
      let StudySession = null
      
      if(Object.keys(allStudySessions).length > 0){

      //12/19: next we need to Display the grade somewhere. And get AVG time studying spent to achieve a grade. Also try to make func convertMinuteToTime a reusable function. We will need it again to display the avg time per grade. I think I just need to make a new file, add the logic, it will take props as timeInMinutes and spit out the time in HH:MM
      let convertMinuteToTime = (timeInMinutes) => {
        let minutes = timeInMinutes % 60;
        let hours = (timeInMinutes - minutes)/60

          if(minutes < 10){
            minutes = '0' + minutes
          }

          return hours + ":" + minutes
        }

      let testGradeOrStudyTime = null

        let timeInMinutes = allStudySessions[classId][selectedTestId].TotalTimeStudiedForTest
        testGradeOrStudyTime = `Total Time Studied for this test: ${convertMinuteToTime(timeInMinutes)}`
  
        //show study session
        StudySession = <ShowStudySessions
          studySessions={{classId: classId, testId: selectedTestId}}
        />

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