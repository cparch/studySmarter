const classTitleObj = {
  byID : {
    "class0": {
      id: "class0",
      classTitle: 'PsychologyRedux'
    },
    "class1": {
      id: "class1",
      classTitle: 'HistoryRedux',
    } 
  },
  allID: ["class0", "class1"]
}

const classesReducer = (state = classTitleObj, action) => {
  switch(action.type){
    case 'ADD_CLASS':
      let classTitleToAdd = action.payload

      let updatedState = {}

      for(const key1 in state){
        
        if(Array.isArray(state[key1])){
          updatedState[key1] = [...state[key1]]
        } else {

          updatedState[key1] = {...state[key1]}

          for (const key2 in state[key1]){
            updatedState[key1][key2] = {...state[key1][key2]}
          }
        }
      }

      let newNum = Object.keys(state.byID).length
      let newID = "class" + newNum

      updatedState.byID[newID] = {
        id: newID,
        classTitle: classTitleToAdd
      }
  
      updatedState.allID.push(newID)

      return updatedState;

    default:
      return state
  }
}

export default classesReducer