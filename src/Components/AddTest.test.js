import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import AddTest from './AddTest';
import moment from 'moment';

 
const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

 
  beforeEach(() => {
    store = mockStore({
      FormHandlerReducer : {
        selectedClass: 0,
        selectedTest: 0,
        SelectedStartTimeValue: '',
        SelectedEndTimeValue: '',
        notes: '',
        classNameToAdd: '',
        testNameToAdd: '',
        gradeInput: '',
        showSubmitConfirmation: false,
        startTimeValue: moment(),
        endTimeValue: moment(),
      },
      classesReducer: {
        byID : {
          "class0": {
            id: "class0",
            classTitle: 'PsychologyRedux'
          },
          "class1": {
            id: "class1",
            classTitle: 'HistoryRedux',
          } 
        },
        allID: ["class0", "class1"]
      }
    });
    component = renderer.create(
      <Provider store={store}>
        <AddTest />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
 
  it('should dispatch an action on button click', () => {
 
  });
});