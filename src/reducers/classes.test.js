import {addClass} from './../actions/index'
import classesReducer from './classes';

describe('classes reducer test', () => {
  it('should return default state',  () => {
    const newState = classesReducer(undefined, {})
    expect(newState).toEqual({
      "allID": ["class0", "class1"], 
      "byID": {
        "class0": {
          "classTitle": "PsychologyRedux", 
          "id": "class0"
        }, 
        "class1": {
          "classTitle": "HistoryRedux", 
          "id": "class1"
        }
      }
    });
  })

  it('should return new state if receiving type and payload',  () => {
    const newState = classesReducer(undefined, addClass("new_class"))
    expect(newState).toEqual({
      "allID": ["class0", "class1", "class2"], 
      "byID": {
        "class0": {"classTitle": "PsychologyRedux", "id": "class0"}, 
        "class1": {"classTitle": "HistoryRedux", "id": "class1"},
        "class2": {"classTitle": "new_class", "id": "class2"}
      }
    });
  })

})