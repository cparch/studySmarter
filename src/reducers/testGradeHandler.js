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
      } 
      // if the class exists, but the test doesn't exist, add test and teh grade
      else if (updatedState['class'+ action.classID][testName] === undefined) {
        updatedState['class'+ action.classID][testName] = {grade: action.testGrade}
      } 
      // if class, test, and grade already exist, just update the grade.
      else {
        updatedState['class'+ action.classID][testName] = {grade: action.testGrade}
      }

      return updatedState 
    
    default: 
      return state
  }
}

export default testGradeReducer