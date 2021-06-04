import AddTest from './AddTest'
import { mount } from 'enzyme'
import { findByTestAttr, testStore } from '../../utils'
import React from 'react'
import { Provider } from 'react-redux';

const setUp = (initialState = {}) => {
  const store = testStore(initialState)

  const wrapper = mount(<Provider store = {store}> <AddTest /> </Provider>)

  // console.log(wrapper.debug())
  return wrapper
}

describe ('AddTest component', () => {

  describe ('should render with no error', () => {
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
      }

      wrapper = setUp(initialState);
    })
  
    it('Should render multiple classes', () => {
      const component = findByTestAttr(wrapper, 'classNameOption')
      expect(component.length).toBe(3)
    })  

    it('Should render form without errors', () => {
      const component = findByTestAttr(wrapper, 'reusable-form')
      expect(component.length).toBe(1)
    })  
  })
})