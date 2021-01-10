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

    case 'ADD_NEW_CLASS_TO_HOMEPAGE':
      const updatedState2 = {...state}
      let newClass = 'class'+ (Object.keys(state).length)

      updatedState2[newClass] = {ShowTests: false,ShowStudySessions:false}

      return updatedState2
    
    default:
      return state
  }
}

export default homePageReducer