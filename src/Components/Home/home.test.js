import Home from './Home'
import { mount } from 'enzyme'
import { findByTestAttr, testStore } from '../../../utils'
import React from 'react'
import { Provider } from 'react-redux';

const setUp = (initialState = {}) => {
  const store = testStore(initialState)

  const wrapper = mount(<Provider store = {store}> <Home /> </Provider>)

  // console.log(wrapper.debug())
  return wrapper
}

describe ('home component', () => {

  describe ('When state is empty it should render with no error', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { classesReducer: { allID: [] } }
      wrapper = setUp(initialState);
    })
  
    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'homePageComponent')
      expect(component.length).toBe(1)
    })
  
    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'classTitleComponent')
      expect(component.length).toBe(0)
    })
  })

  describe ('When state has class info it should render with no error', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = {
        classesReducer: {
          byID : {
            "class0": {
              id: "class0",
              classTitle: 'PsychologyReduxTest'
            },
            "class1": {
              id: "class1",
              classTitle: 'HistoryReduxTest',
            },
            "class2": {
              id: "class2",
              classTitle: 'MathReduxTest',
            } 
          },
          allID: ["class0", "class1", "class2"]    
        },
        homePageReducer: {
          "class0": {
            ShowTests: false,
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
        }
    }
      wrapper = setUp(initialState);
    })
  
    it('Should render 1 homePageComponent', () => {
      const component = findByTestAttr(wrapper, 'homePageComponent')
      expect(component.length).toBe(1)
    })
  
    it('Should render 3 classTitleComponents', () => {
      const component = findByTestAttr(wrapper, 'classTitleComponent')
      expect(component.length).toBe(3)
    })
  })
})