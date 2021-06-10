import StudyInsights from './StudyInsights'
import { mount, shallow } from 'enzyme'
import { findByTestAttr, testStore } from '../../../utils'
import React from 'react'
import { Provider } from 'react-redux';

const setUp = (initialState = {}) => {
  const store = testStore(initialState)

  // it would be better if I can pass this from app.js where it is defined. 
  const convertMinuteToTime = (timeInMinutes) => {
    let minutes = timeInMinutes % 60;
    let hours = (timeInMinutes - minutes)/60

      if(minutes < 10){
        minutes = '0' + minutes
      }

      return hours + ":" + minutes
    }

  const wrapper = mount(<Provider store = {store}> <StudyInsights convertMinuteToTime={ convertMinuteToTime }/> </Provider>)

  // console.log(wrapper.debug())
  return wrapper
}

describe ('StudyInsights component', () => {
  describe('should render without error when no data is provided', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = {
        testGradeReducer: {},
        studySessionReducer: {}
      }

      wrapper = setUp(initialState);
    })

    it('Should render 5 grades', () => {
      const component = findByTestAttr(wrapper, 'gradeRow')
      expect(component.length).toBe(5)
    })  

    it('should render "no data" for all 5 grades', () => {
      expect(
        wrapper.containsMatchingElement(
          <tbody>
            <tr data-test="gradeRow">
              <td className="cell">A</td>
              <td>no Data</td>
            </tr>
            <tr data-test="gradeRow">
              <td className="cell">B</td>
              <td>no Data</td>
            </tr>
            <tr data-test="gradeRow">
              <td className="cell">C</td>
              <td>no Data</td>
            </tr>
            <tr data-test="gradeRow">
              <td className="cell">D</td>
              <td>no Data</td>
            </tr>
            <tr data-test="gradeRow">
              <td className="cell">F</td>
              <td>no Data</td>
            </tr>
          </tbody>
        )
      ).toBeTruthy()

    })
  })

  describe ('should render without error when data is provided', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = {
        testGradeReducer: {
          class0 : {
            test0: {grade: 'A'}
          }
        },
        studySessionReducer: {
          class0: {
            test0: {TotalTimeStudiedForTest: 90}
          }
        }
      }

      wrapper = setUp(initialState);
    })
  
    it('Should render 5 grades', () => {
      const component = findByTestAttr(wrapper, 'gradeRow')
      expect(component.length).toBe(5)
    })  

    it('Should display correct avg study time for the grade of A', () => {
      expect(
        wrapper.containsMatchingElement(
          <tr data-test="gradeRow">
            <td className="cell">A</td>
            <td>1:30</td>
          </tr>
        )
      ).toBeTruthy()
    })  
  })
})