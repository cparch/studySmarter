const testList = {
  "class0": {
    "test0" : {
      id: "test0",
      testTitle: 'Chapter 1'
    }
  }
}

const testReducer = (state = testList, action) => {
  switch(action.type){
    case 'ADD_TEST':
      
      let testTitleToAdd = action.testTitleToAdd
      let classIdNumber = action.classIdNumber

      let updatedState = {}

      // copy state immutably
      for(const key in state){
        updatedState[key] = {...state[key]}
        for(const key2 in state[key]){
            updatedState[key][key2] = {...state[key][key2]}
        }
      }

      // if class isn't in the state object, add it.
      if(!updatedState[classIdNumber]){
        updatedState[classIdNumber] = {}
      }

      // create new test ID
      let newNum = Object.keys(updatedState[classIdNumber]).length
      let newTestID = "test" + newNum

      // update the copied state object
      updatedState[classIdNumber][newTestID] = {
        id: newTestID,
        testTitle: testTitleToAdd
      }

      // update state
      return updatedState;

    default:
      return state
  }
}

export default testReducer