import React from 'react';
import ShowStudySessions from './ShowStudySessions.js';
import './ShowTest.css';

const ShowTests = (props) => {

  let listItems = props.courseInfo.test.map((testInfo, testIdx) =>{
    let showStudySession = null
    if(testInfo.homePageShowStudySessions){
      showStudySession = <ShowStudySessions
        studySessions={testInfo.studySession}
      />
    }
    return(
      <div 
        className='testName'
        onClick={() => props.homePageShowTestStudySessions(props.classIdx, testIdx)}
        key={testInfo.testName}
      >
        {testInfo.testName}
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