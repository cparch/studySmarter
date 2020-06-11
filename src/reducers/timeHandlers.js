// import moment from 'moment';

const timeHandlerReducer = (state = {}, action) => {
  switch(action.type){
    case 'START_TIME':

      console.log("hello from timeHandler.js")

      // let TIME = action.payload.

      // let startTimeValue = action.payload
      // const updatedState = {...state}
      // updatedState.SelectedStartTimeValue = startTimeValue && startTimeValue.format('HH:mm') 
      // updatedState.SelectedStartTimeValueToDisplay = startTimeValue && startTimeValue.format('LT')
      
      //just test this. the commented out code above uses moment i think. I want to test that separately. 
        //this should test what is connected to the other file
        // updatedState.test = startTimeValue 
      // updatedState.test = "hello"

      // check the state, this this equal
      // return updatedState 
      return state
    
    default:
      return state
  }
}

export default timeHandlerReducer