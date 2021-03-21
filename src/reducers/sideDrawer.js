const sideDrawerReducer = (state = {showSideDrawer: false}, action) => {
  switch(action.type){
    case 'SIDE_DRAWER_TOGGLE':
      const updatedState = {...state}
      updatedState.showSideDrawer = !state.showSideDrawer
      
      return updatedState 
    
    default:
      return state
  }
}

export default sideDrawerReducer