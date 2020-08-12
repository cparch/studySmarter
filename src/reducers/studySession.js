const studySessionReducer = (state = {}, action) => {
  switch(action.type){
    case 'ADD_STUDY_SESSION_DETAILS':

      /* 
      - Add times
        - there are a few different times that we need for various calculations. Check the old state for everything we need. 
        - It might make more sense to figure out that times first. That ways we understand the entire state obj stricture, before we try to copy it in an immutable fashion.
      */

    // old codes that works, but is not immutable
    // const updatedState = {...state}

    // new code that doesn't work. It seems like this is immutable
     let updatedState = {};

     for(const key in state) {
       debugger
        updatedState[key] = {...state[key]}
     }

      
      const testName = 'test' + action.testID      
      // if no class, add the class, test, and notes
      if(updatedState['class'+ action.classID] === undefined){
        updatedState['class'+ action.classID] = {[testName]: [{StudySession0: {notes: action.notes}}] }
      } 
      // else if no test add the test
      else if (updatedState['class'+ action.classID][testName] === undefined) {
        updatedState['class'+ action.classID][testName] = [{StudySession0: {notes: action.notes}}]
      } 
      // else add the study session to the test
      else {
        let selectedTestStudySessionArray = updatedState['class'+ action.classID][testName]
        selectedTestStudySessionArray.push({['studySession' + selectedTestStudySessionArray.length]: {notes: action.notes}})
      }

      console.log("LINE 21: updated state :", updatedState )
      return updatedState 
    
    default: 
      return state
  }
}

export default studySessionReducer