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