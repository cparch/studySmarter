export const formHandler = (event) => {
  return {
    type: 'FORM_HANDLER',
    payload: event
  }
}

export const startTimeHandlerRedux = (startTimeObj) => {
  return {
    type: 'START_TIME_HANDLER',
    payload: startTimeObj
  }
}

export const endTimeHandlerRedux = (endTimeObj) => {
  return {
    type: 'END_TIME_HANDLER',
    payload: endTimeObj
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

export const addStudySessionDetails = (classID, testID, notes, SelectedStartTimeValue, SelectedStartTimeValueToDisplay, SelectedEndTimeValue, SelectedEndTimeValueToDisplay) => {
  return {
    type: 'ADD_STUDY_SESSION_DETAILS',
    classID, 
    testID, 
    notes,
    SelectedStartTimeValue,
    SelectedStartTimeValueToDisplay,
    SelectedEndTimeValue,
    SelectedEndTimeValueToDisplay
  }
}

export const addTestGrade = (testGrade, classID, testID) => {
  return {
    type: 'ADD_FINAL_TEST_GRADE',
    testGrade,
    classID,
    testID
  }
}

export const toggleShowTests = (classId) => {
  return {
    type: 'SHOW_TEST_TOGGLE',
    classId
  }
}

export const toggleShowStudySessions = (classId, testId) => {
  return {
    type: 'TOGGLE_SHOW_STUDY_SESSIONS',
    classId,
    testId
  }
}

