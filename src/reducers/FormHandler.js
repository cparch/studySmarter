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
}

const FormHandlerReducer = (state = stateObj, action) => {
  switch(action.type){
    case 'FORM_HANDLER':
      let key = action.payload.target.name
      let value = action.payload.target.value
      let updatedState = {...state}
 
      updatedState[key] = value
      return updatedState;

    default:
      return state
  }
}

export default FormHandlerReducer