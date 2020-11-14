const testGradeReducer = (state = {}, action) => {
  switch(action.type){
    case 'ADD_FINAL_TEST_GRADE':

     let updatedState = {};

     for(const key in state) {
        updatedState[key] = {...state[key]}
     }

      const testName = 'test' + action.testID      
      // if no class, add the class, and test grade
      if(updatedState['class'+ action.classID] === undefined){
        
        updatedState['class'+ action.classID] = {[testName]: {grade: action.testGrade}}
      } else if (updatedState['class'+ action.classID][testName] === undefined) {
        updatedState['class'+ action.classID][testName] = {grade: action.testGrade}
      } 
      // else update test grade
      // else {
      //   let selectedTestStudySessionArray = updatedState['class'+ action.classID][testName]
      //   selectedTestStudySessionArray.push({['studySession' + selectedTestStudySessionArray.length]: {
      //     notes: action.notes,
      //     SelectedStartTimeValue: action.SelectedStartTimeValue, 
      //     SelectedStartTimeValueToDisplay: action.SelectedStartTimeValueToDisplay,
      //     SelectedEndTimeValue: action.SelectedEndTimeValue,
      //     SelectedEndTimeValueToDisplay: action.SelectedEndTimeValueToDisplay
      //   }})
      // }

      return updatedState 
    
    default: 
      return state
  }
}

export default testGradeReducer