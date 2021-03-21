import {sideDrawerToggle} from './../actions/index'
import sideDrawerReducer from './sideDrawer';

describe('SideDrawer reducer test', () => {
  it('should return default state',  () => {
    const newState = sideDrawerReducer(undefined, {})
    expect(newState).toEqual({showSideDrawer: false});
  })

  it('should return updated state',  () => {
    const newState = sideDrawerReducer(undefined, sideDrawerToggle())
    expect(newState).toEqual({showSideDrawer: true});
  })

})