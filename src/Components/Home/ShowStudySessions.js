import React from 'react';

const ShowStudySession = (props) => { 

  const listItems = props.studySessions.map(studySession => {

    return(
      <div>
        <div>
          Study Session Number: {studySession.studySessionNum}
        </div>
        <div>
          Start Time:{studySession.startTime}
        </div>

        <div>
          End Time: {studySession.endTime}
        </div>

        <div>
          Duration of study session: {studySession.studyDuration}
        </div>

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