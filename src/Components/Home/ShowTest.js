import React from 'react';
import ShowStudySessions from './ShowStudySessions.js';

const ShowTests = (props) => {

  let listItems = props.courseInfo.test.map((testInfo) =>{
    return(
      <div>
        {testInfo.testName}
        <ShowStudySessions
          studySessions={testInfo.studySession}
        />
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