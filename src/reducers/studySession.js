const studySessionReducer = (state = {}, action) => {
  switch(action.type){
    case 'ADD_STUDY_SESSION_DETAILS':

      console.log("hello from studySession.js")
      console.log(action.classID, action.testID, action.notes)

      /* 8/8/2020: Logic is here to update the obj. 
      - Now I need to figure out out to copy the state in an immutable fashion
      - Add times
        - there are a few different times that we need for various caluculations. Check the old state for everything we need. 
        - It might make more sense to figure out that times first. That ways we understand the entire state obj stricture, before we try to copy it in an immutable fashion.
      */

      const updatedState = {...state}
      const testName = 'test' + action.testID      
      // if no class, add the class, test, and notes
      if(updatedState['class'+ action.classID] === undefined){
        updatedState['class'+ action.classID] = {[testName]: [{StudySession0: action.notes}] }
      } else if (updatedState['class'+ action.classID][testName] === undefined) {
        updatedState['class'+ action.classID][testName] = [{StudySession0: action.notes}]
      } else {
        let selectedTestStudySessionArray = updatedState['class'+ action.classID][testName]
        selectedTestStudySessionArray.push({['studySession' + selectedTestStudySessionArray.length]: action.notes})
      }

    
      console.log("LINE 21: updated state :", updatedState )
      debugger
      
      return updatedState 
    
    default: 
      return state
  }
}

export default studySessionReducer