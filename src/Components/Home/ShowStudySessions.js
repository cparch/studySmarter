import React from 'react';
import './ShowStudySessions.css'
import { useSelector } from 'react-redux'

const ShowStudySession = (props) => { 
  const classId = props.studySessions.classId
  const testId = props.studySessions.testId
  const studySessionList = useSelector(state => state.studySessionReducer[classId][testId].studySessionList)

  const listItems = studySessionList.map((studySessionObj, idx )=> {
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