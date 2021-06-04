import AddClass from './AddClass'
import { mount } from 'enzyme'
import { findByTestAttr, testStore } from '../../utils'
import React from 'react'
import { Provider } from 'react-redux';

const setUp = (initialState = {}) => {
  const store = testStore(initialState)

  const wrapper = mount(<Provider store = {store}> <AddClass /> </Provider>)

  // console.log(wrapper.debug())
  return wrapper
}

describe ('AddClass component', () => {

  describe ('should render with no error', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = {}
      wrapper = setUp(initialState);
    })
  
    it('Should render form without errors', () => {
      const component = findByTestAttr(wrapper, 'addClassForm')
      expect(component.length).toBe(1)
    })  
  })
})