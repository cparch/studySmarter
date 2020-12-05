const studySessionReducer = (state = {}, action) => {
  switch(action.type){
    case 'ADD_STUDY_SESSION_DETAILS':

     let updatedState = {};

     for(const key in state) {
        updatedState[key] = {...state[key]}
     }

      const testName = 'test' + action.testID      
      // if no class, add the class, test, and notes
      if(updatedState['class'+ action.classID] === undefined){
        updatedState['class'+ action.classID] = { 
          [testName]: {
            showStudySessions: false,
            studySessionList: [
              {StudySession0: {
                notes: action.notes,
                SelectedStartTimeValue: action.SelectedStartTimeValue, 
                SelectedStartTimeValueToDisplay: action.SelectedStartTimeValueToDisplay,
                SelectedEndTimeValue: action.SelectedEndTimeValue,
                SelectedEndTimeValueToDisplay: action.SelectedEndTimeValueToDisplay,
                studySessionDuration: action.studySessionDuration
              }}
            ]
          }
        }
      } 
      // else if no test add the test
      else if (updatedState['class'+ action.classID][testName] === undefined) {
        updatedState['class'+ action.classID][testName] = {
          showStudySessions: false,
          studySessionList: [
            {StudySession0: {
              notes: action.notes,
              SelectedStartTimeValue: action.SelectedStartTimeValue, 
              SelectedStartTimeValueToDisplay: action.SelectedStartTimeValueToDisplay,
              SelectedEndTimeValue: action.SelectedEndTimeValue,
              SelectedEndTimeValueToDisplay: action.SelectedEndTimeValueToDisplay,
              studySessionDuration: action.studySessionDuration
            }}
          ]
        }
      } 
      // else add the study session to the test
      else {
        let selectedTestStudySessionArray = updatedState['class'+ action.classID][testName].studySessionList
        selectedTestStudySessionArray.push({['StudySession' + selectedTestStudySessionArray.length]: {
          notes: action.notes,
          SelectedStartTimeValue: action.SelectedStartTimeValue, 
          SelectedStartTimeValueToDisplay: action.SelectedStartTimeValueToDisplay,
          SelectedEndTimeValue: action.SelectedEndTimeValue,
          SelectedEndTimeValueToDisplay: action.SelectedEndTimeValueToDisplay,
          studySessionDuration: action.studySessionDuration
        }})
      }

      // console.log("LINE 21: updated state :", updatedState )
      return updatedState 
    
    case 'TOGGLE_SHOW_STUDY_SESSIONS':
      const updatedState2 = {...state};
      const classId = action.classId 
      const testId = action.testId 
      updatedState2[classId][testId].showStudySessions = !state[classId][testId].showStudySessions
      return updatedState2

    default: 
      return state
  }
}

export default studySessionReducer