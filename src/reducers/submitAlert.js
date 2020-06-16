const submitAlertReducer = (state = {showSubmitConfirmation: false}, action) => {
  switch(action.type){
    case 'SUBMIT_ACKNOWLEDGED':

      console.log("SUBMIT_ACKNOWLEDGED")

      const updatedState = {...state}
      updatedState.showSubmitConfirmation = false
      console.log("updated state :", updatedState )
      return updatedState 
    
    case 'SHOW_SUBMIT_MESSAGE':

    console.log("SHOW_SUBMIT_MESSAGE!!!!")
    const updatedStateShowSubmit = {...state}
    updatedStateShowSubmit.showSubmitConfirmation = true
    console.log("updated state :", updatedStateShowSubmit )
    return updatedStateShowSubmit 
    
    default:
      return state
  }
}

export default submitAlertReducer