import React from 'react';
import ShowStudySessions from './ShowStudySessions.js';
import './ShowTest.css';
import { useSelector } from 'react-redux'

const ShowTests = (props) => {
  let testList = useSelector(state => state.testReducer)
  let testNameArray = [];

  // this gathers all the test names for the selected class and puts them in an array
  for(const classObj in testList){
    for(const testObj in testList[classObj]){
      testNameArray.push(testList[classObj][testObj].testTitle)
    }
  }

  //11/21: on the home page, when you click the class name, we can now see the test names. The next thing is when you click on the test name we should get all the study session info. The very next task is to have HomePageHandler update showStudySessions for that particular test. I think I need to add the showStudySessions boolen to study session reducer, because we only want to see the study sessions for the test of our choice. 

  // let listItems = props.courseInfo.test.map((testInfo, testIdx) =>{
  let listItems = testNameArray.map((testName, testIdx) =>{

    let showStudySession = null
    // let testGradeOrStudyTime = `Total Time Studied for this test: ${testInfo.totalTimeStudiedPerTest}`
    let testGradeOrStudyTime = `Work on line 9 in showTest.js`

    //11/21: work on this once test are displaied. This shows the study session info
    // if(testInfo.homePageShowStudySessions){
    //   showStudySession = <ShowStudySessions
    //     studySessions={testInfo.studySession}
    //   />
    // }

    // if(testInfo.grade){
    //   testGradeOrStudyTime = `Grade: ${testInfo.grade}`
    // }
    return(
      <div 
        className='testName'
        onClick={() => props.homePageShowTestStudySessions(props.classIdx, testIdx)}
        key={testName}
      >
        {testName}: {testGradeOrStudyTime}
        {showStudySession}
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