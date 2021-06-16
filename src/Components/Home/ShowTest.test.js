import ShowTest from './ShowTest'
import { mount, shallow } from 'enzyme'
import { findByTestAttr, testStore } from '../../../utils'
import React from 'react'
import { Provider } from 'react-redux';

/*We need to test a few things here:
  1. no grade entered
  2. grade entered
  3.no study session entered
  4. study session entered
  5. no test info
 */

const setUp = (initialState = {}) => {
  const store = testStore(initialState)

  // ended here. I need to figure out why it renders like it has test info, but can't obtain any test info. Check and see if I set up my test state  correctly. Check out line 24 in showTest.js. I need to check and see how the redux state is set up on the page vs the redux state in the test

  const showTestProps = {classId: 0}
  const wrapper = mount(<Provider store = {store}> <ShowTest {...showTestProps}/> </Provider>)
  wrapper.setProps({ classId: 0 })

  console.log(wrapper.debug())
  return wrapper
}

describe ('ShowTest component', () => {
  describe ('Should display test info when test info is present', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = {
        testReducer: [
          {
            "test0" : {
              id: "test0",
              testTitle: 'test-Chapter 1'
            }
          }
        ]
      }
      wrapper = setUp(initialState);
    })
  
    it('should render "test-Chapter 1 : No Study Session info to display. Please add a study session."', () => {
      expect(
        wrapper.containsMatchingElement(
          <div className="testName">
            test-Chapter 1: No Study Session info to display. Please add a study session.
          </div>
        )
      ).toBeTruthy()
    })  
  })

  describe ('Should display correct messages when no test data is provided', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = {
        testReducer: []
      }
      wrapper = setUp(initialState);
    })
    
    it('Should render 1 addTestMessage', () => {
      const component = findByTestAttr(wrapper, 'addTestMessage')
      expect(component.length).toBe(1)
    })
  })
})