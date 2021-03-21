const sideDrawerReducer = (state = {showSideDrawer: false}, action) => {
  switch(action.type){
    case 'SIDE_DRAWER_TOGGLE':
      const updatedState = {...state}
      updatedState.showSideDrawer = !state.showSideDrawer
      console.log("updated state :", updatedState )
      
      return updatedState 
    
    default:
      return state
  }
}

export default sideDrawerReducer