const homePageInfo = {
  "class0": {
    ShowTests: false,
    ShowStudySessions:false
  },
  "class1": {
    ShowTests: false,
    ShowStudySessions:false
  } 
}


const homePageReducer = (state = homePageInfo, action) => {
  switch(action.type){
    case 'SHOW_TEST_TOGGLE':

      console.log("hello from homePageReducer.js")
      const classId = action.classId      

      const updatedState = {...state}
      updatedState[classId].ShowTests = !state[classId].ShowTests
      console.log("updated state :", updatedState )
      
      return updatedState 
    
    default:
      return state
  }
}

export default homePageReducer