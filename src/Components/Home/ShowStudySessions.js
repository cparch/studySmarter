import React from 'react';
import './ShowStudySessions.css'

const ShowStudySession = (props) => { 

  const listItems = props.studySessions.map(studySession => {

    return(
      <div className='studySessionContainer'>
        <div className='sessionNum'>
          Study Session Number: {studySession.studySessionNum}
        </div>
        <br/>
        <div>
          Start Time:{studySession.startTimeToDisplay}
        </div>

        <div>
          End Time: {studySession.endTimeToDisplay}
        </div>

        <div>
          Duration of study session: {studySession.studySessionDuration}
        </div>
        <br/>
        <div>
          Notes: {studySession.notes}
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