import moment from 'moment';

// handleStudySessionEndTime(value) {
//   this.setState({ 
//     endTimeValue: value,
//     // [value.target.name]: value,
//     SelectedEndTimeValueToDisplay: value && value.format('LT'),
//     SelectedEndTimeValue: value && value.format('HH:mm')
//   });

const initialState = {
  SelectedEndTimeValueToDisplay : moment()
}

const studySessionTimes = (state = initialState, action) => {
  switch(action.type){
    case 'START_TIME':
      // console.log(action.payload)

      let updatedState = {...state};
      updatedState.test = action.payload

      return updatedState;

    // case 'END_TIME':
    //   //get this func to just console log something
    //   console.log("hello from end time")
    //   let updateEndTime = {...state};
    //   updateEndTime.endTimeValue = action.payload
    //   updateEndTime.SelectedEndTimeValueToDisplay = action.payload && action.payload.format('LT')
    //   updateEndTime.SelectedEndTimeValue = action.payload && action.payload.format('HH:mm')
    //   return updateEndTime
    
    default:
      // debugger
      return state
  }
}

export default studySessionTimes