import * as actions from './'

describe('actions', () => {
  it('should create an action to open or close side drawer navigation', () => {
    const expectedAction = {
      type: 'SIDE_DRAWER_TOGGLE'
    }
    expect(actions.sideDrawerToggle()).toEqual(expectedAction)
  })

  it('should create an action to hide the submit btn', () => {
    const expectedAction = {
      type: 'SUBMIT_ACKNOWLEDGED'
    }
    expect(actions.submitAcknowledged()).toEqual(expectedAction)
  })

  it('should create an action to show the submit was accepted message', () => {
    const expectedAction = {
      type: 'SHOW_SUBMIT_MESSAGE'
    }
    expect(actions.showSubmitMessage()).toEqual(expectedAction)
  })

  it('should create an action to add a class', () => {
    const text = 'Math 101'
    const expectedAction = {
      type: 'ADD_CLASS',
      payload: text
    }
    expect(actions.addClass(text)).toEqual(expectedAction)
  })

  it('should create an action to add a test', () => {
    const classIdNumber = '0'
    const testTitleToAdd = 'Math Basics'
    const expectedAction = {
      type: 'ADD_TEST',
      classIdNumber: classIdNumber,
      testTitleToAdd: testTitleToAdd
    }
    expect(actions.addTest(classIdNumber, testTitleToAdd)).toEqual(expectedAction)
  })

  // it('should create an action to add a test', () => {
  //   addStudySessionDetails()
  // })

  it('should create an action to add a grade for a test', () => {
    const testGrade = 'A'
    const classID = 0
    const testID = 0

    const expectedAction = {
      type: 'ADD_FINAL_TEST_GRADE',
      testGrade: testGrade,
      classID: classID,
      testID: testID
    }
    expect(actions.addTestGrade(testGrade, classID, testID)).toEqual(expectedAction)
  })

  it('should create an action to show and hide tests', () => {
    const classId = 0

    const expectedAction = {
      type: 'SHOW_TEST_TOGGLE',
      classId: classId
    }
    expect(actions.toggleShowTests(classId)).toEqual(expectedAction)
  })

  it('should create an action to add new class to home page', () => {
    const expectedAction = {
      type: 'ADD_NEW_CLASS_TO_HOMEPAGE',
    }
    expect(actions.addNewClassToHomepage()).toEqual(expectedAction)
  })

  it('should create an action to add new class to home page', () => {
    const classId = 0
    const testId = 0
    const expectedAction = {
      type: 'TOGGLE_SHOW_STUDY_SESSIONS',
      classId: classId,
      testId: testId
    }
    expect(actions.toggleShowStudySessions(classId, testId)).toEqual(expectedAction)
  })

})