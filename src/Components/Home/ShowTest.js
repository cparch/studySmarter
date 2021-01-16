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
  let allTestGrades = useSelector(state => state.testGradeReducer)
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

      if(Object.keys(allStudySessions).length > 0 && allStudySessions[classId] && allStudySessions[classId][selectedTestId]){


      //1/10:Test the site around adding classes, test, study sessions, and grades for errors. Try multiple of each per class.  Next we need to get AVG time studying spent to achieve a grade. 

        let timeInMinutes = allStudySessions[classId][selectedTestId].TotalTimeStudiedForTest

        // what to display for the test grade
        let testGrade = 'No test grade entered.'
        
        if(allTestGrades[classId]){
          if(allTestGrades[classId][selectedTestId]){
            testGrade = allTestGrades[classId][selectedTestId].grade
          } 
        }
        
        let testGradeOrStudyTime = `Total Time Studied for this test: ${props.convertMinuteToTime(timeInMinutes)}. Grade: ${testGrade}`
  
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