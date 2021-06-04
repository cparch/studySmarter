import AddStudySession from './AddStudySession'
import { mount } from 'enzyme'
import { findByTestAttr, testStore } from '../../../utils'
import React from 'react'
import { Provider } from 'react-redux';

const setUp = (initialState = {}) => {
  const store = testStore(initialState)

  const wrapper = mount(<Provider store = {store}> <AddStudySession /> </Provider>)

  // console.log(wrapper.debug())
  return wrapper
}

describe ('AddStudySession component', () => {

  describe ('should render with no error', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = {
        classesReducer: {
          byID: {
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
        testReducer: {
          "class0": {
            "test0" : {
              id: "test0",
              testTitle: 'Psych Chapter 1'
            },
          },  
          "class1": {
            "test0" : {
              id: "test0",
              testTitle: 'Hist Chapter 1'
            },
            "test1" : {
              id: "test1",
              testTitle: 'Hist Chapter 2'
            },
            "test2" : {
              id: "test2",
              testTitle: 'Hist Chapter 3'
            }

          }  
        },
        FormHandlerReducer: {
          selectedClass: 1,
          // selectedTest: 0,
          // SelectedStartTimeValue: '',
          // SelectedEndTimeValue: '',
          // notes: '',
          // classNameToAdd: '',
          // testNameToAdd: '',
          // gradeInput: '',
          // showSubmitConfirmation: false,
          // startTimeValue: moment(),
          // endTimeValue: moment(),
        }
      }

      wrapper = setUp(initialState);
    })
  
    it('Should render 3 class name options', () => {
      const component = findByTestAttr(wrapper, 'class-option')
      expect(component.length).toBe(3)
    })  

    it('Should render 3 test name options', () => {
      const component = findByTestAttr(wrapper, 'test-option')
      expect(component.length).toBe(3)
    })  
  })
})