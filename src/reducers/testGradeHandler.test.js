import {addTestGrade} from './../actions/index'
import testGradeReducer from './testGradeHandler';

describe('testGradeReducer reducer test', () => {
  it('should return default state',  () => {
    const newState = testGradeReducer(undefined, {})
    expect(newState).toEqual({});
  })

  describe('addTestGrade test', () => {
    it('should return updated state with test grad added',  () => {
      const newState = testGradeReducer(undefined, addTestGrade('A', '0', '0'))
      expect(newState).toEqual({
        "class0": {
          "test0": {
            "grade": "A",
          },
        },
      });
    })
  
    let updatedState = {
      "class0": {
        "test0": {
          "grade": "A",
        },
      },
    }

    it('should update test grade when test grade is already entered',  () => {
      const newState = testGradeReducer(updatedState, addTestGrade('B', '0', '0'))
      expect(newState).toEqual({
        "class0": {
          "test0": {
            "grade": "B",
          },
        },
      });
    })

    it('should add new test if class already exists in state',  () => {
      const newState = testGradeReducer(updatedState, addTestGrade('B', '0', '1'))
      expect(newState).toEqual({
        "class0": {
          "test0": {
            "grade": "A",
          },
          "test1": {
            "grade": "B",
          }
        },
      });
    })

  })
})