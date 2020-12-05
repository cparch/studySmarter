import React from 'react';
import './ShowStudySessions.css'
import { useSelector } from 'react-redux'

const ShowStudySession = (props) => { 
  const classId = props.studySessions.classId
  const testId = props.studySessions.testId
  const studySessionList = useSelector(state => state.studySessionReducer[classId][testId].studySessionList)

  console.log('studySessionList: ', studySessionList)

  //11/28: need to figure out how to come up with a function to determine the duration of study time. Check and see how we did it the old way before redux. Read note from 11/21 in showTest.js to figure out how to merge back to master.

  const listItems = studySessionList.map((studySessionObj, idx )=> {
    console.log('line 21: studySession+idx: ', 'studySession'+idx)
    console.log(studySessionObj['StudySession'+idx].SelectedStartTimeValueToDisplay)
    return(
      <div className='studySessionContainer' key={idx} >
        <div className='sessionNum' >
          Study Session Number: {idx + 1}
        </div>
        
        <br/>
        <div>
          Start Time: {studySessionObj['StudySession'+idx].SelectedStartTimeValueToDisplay}
        </div>

        <div>
          End Time: {studySessionObj['StudySession'+idx].SelectedEndTimeValueToDisplay}
        </div>

        <div>
          Duration of study session: {studySessionObj['StudySession'+idx].studySessionDuration}
        </div>
        <br/>
        <div>
          Notes: {studySessionObj['StudySession'+idx].notes}
        </div>
      </div>
    )
  })

  return (
    <div>
      {listItems}
    </div>
  )
};

export default ShowStudySession;