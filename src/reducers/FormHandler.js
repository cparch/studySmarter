import moment from 'moment';

const stateObj = {
  selectedClass: 0,
  selectedTest: 0,
  SelectedStartTimeValue: '',
  SelectedEndTimeValue: '',
  notes: '',
  classNameToAdd: '',
  testNameToAdd: '',
  gradeInput: '',
  showSubmitConfirmation: false,
  startTimeValue: moment(),
  endTimeValue: moment(),
}

const FormHandlerReducer = (state = stateObj, action) => {
  switch(action.type){
    case 'FORM_HANDLER':
      let key = action.payload.target.name
      let value = action.payload.target.value
      let updatedState = {...state}
 
      updatedState[key] = value
      return updatedState;
    
    case 'START_TIME_HANDLER':
      // console.log("START_TIME_HANDLER from formHandler.js: ", action.payload)
      let updatedState2 = {...state}

      updatedState2.startTimeValue = action.payload.startTimeValue
      updatedState2.SelectedStartTimeValueToDisplay = action.payload.SelectedStartTimeValueToDisplay
      updatedState2.SelectedStartTimeValue = action.payload.SelectedStartTimeValue

      return updatedState2

    case 'END_TIME_HANDLER':
        let updatedState3 = {...state}
  
        updatedState3.endTimeValue = action.payload.EndTimeValue
        updatedState3.SelectedEndTimeValueToDisplay = action.payload.SelectedEndTimeValueToDisplay
        updatedState3.SelectedEndTimeValue = action.payload.SelectedEndTimeValue
  
        return updatedState3

    default:
      return state
  }
}

export default FormHandlerReducer