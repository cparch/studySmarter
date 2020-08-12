export const formHandler = (event) => {
  return {
    type: 'FORM_HANDLER',
    payload: event
  }
}

export const studySessionStartTime = (startTimeValue) => {
  return {
    type: 'START_TIME',
    payload: startTimeValue
  }
}

export const sideDrawerToggle = () => {
  return {
    type: 'SIDE_DRAWER_TOGGLE'
  }
}

export const submitAcknowledged = () => {
  return {
    type: 'SUBMIT_ACKNOWLEDGED'
  }
}

export const showSubmitMessage = () => {
  return {
    type: 'SHOW_SUBMIT_MESSAGE'
  }
}

export const addClass = (classTitleToAdd) => {
  return {
    type: 'ADD_CLASS',
    payload: classTitleToAdd
  }
}

export const addTest = (classIdNumber, testTitleToAdd) => {
  return {
    type: 'ADD_TEST',
    classIdNumber,
    testTitleToAdd
  }
}

export const addStudySessionDetails = (classID, testID, notes) => {
  return {
    type: 'ADD_STUDY_SESSION_DETAILS',
    classID, 
    testID, 
    notes
  }
}