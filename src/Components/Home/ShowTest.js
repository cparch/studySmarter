import React from 'react';
import ShowStudySessions from './ShowStudySessions.js';
import './ShowTest.css';

const ShowTests = (props) => {

  let listItems = props.courseInfo.test.map((testInfo, testIdx) =>{
    let showStudySession = null
    let testGradeOrStudyTime = `Total Time Studied for this test: ${testInfo.totalTimeStudiedPerTest}`
    if(testInfo.homePageShowStudySessions){
      showStudySession = <ShowStudySessions
        studySessions={testInfo.studySession}
      />
    }

    if(testInfo.grade){
      testGradeOrStudyTime = `Grade: ${testInfo.grade}`
    }
    return(
      <div 
        className='testName'
        onClick={() => props.homePageShowTestStudySessions(props.classIdx, testIdx)}
        key={testInfo.testName}
      >
        {testInfo.testName}: {testGradeOrStudyTime}
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