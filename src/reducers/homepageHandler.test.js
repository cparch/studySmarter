import {toggleShowTests, addNewClassToHomepage} from './../actions/index'
import homePageReducer from './homePageHandler';

describe('Home Page reducer test', () => {
  it('should return default state',  () => {
    const newState = homePageReducer(undefined, {})
    expect(newState).toEqual({
      "class0": {
        ShowTests: false,
        ShowStudySessions:false
      },
      "class1": {
        ShowTests: false,
        ShowStudySessions:false
      } 
    });
  })
  
  describe('Testing toggleShowTests', () => {
    it('should return class0 showTest as true',  () => {
      const newState = homePageReducer(undefined, toggleShowTests("class0"))
      expect(newState).toEqual({
        "class0": {
          ShowTests: true,
          ShowStudySessions:false
        },
        "class1": {
          ShowTests: false,
          ShowStudySessions:false
        } 
      });
    })
  
  })

  describe('Testing addNewClassToHomepage', () => {
    it('should return new obj class2',  () => {
      const newState = homePageReducer(undefined, addNewClassToHomepage())
      expect(newState).toEqual({
        "class0": {
          ShowTests: true,
          ShowStudySessions:false
        },
        "class1": {
          ShowTests: false,
          ShowStudySessions:false
        },
        "class2": {
          ShowTests: false,
          ShowStudySessions:false
        } 
      });
    })
  
  })

})