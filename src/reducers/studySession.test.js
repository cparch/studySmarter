import {addStudySessionDetails, toggleShowStudySessions} from './../actions/index'
import studySessionReducer from './studySession';

describe('studySession reducer test', () => {
  it('should return default state',  () => {
    const newState = studySessionReducer(undefined, {})
    expect(newState).toEqual({});
  })

  describe('addStudySessionDetails test', () => {
    it('should return updated state with new study session details added',  () => {
      const newState = studySessionReducer(undefined, addStudySessionDetails('0', '0', 'Studied at Starbucks', '02:00', '02:00 pm', '03:00', '03:00 pm', '1:00', '60'))
      expect(newState).toEqual({
        "class0": {
          "test0": {
            "TotalTimeStudiedForTest": "60",
            "showStudySessions": false,
            "studySessionList": [
              {
                "StudySession0": {
                  "SelectedEndTimeValue": "03:00",
                  "SelectedEndTimeValueToDisplay": "03:00 pm",
                  "SelectedStartTimeValue": "02:00",
                  "SelectedStartTimeValueToDisplay": "02:00 pm",
                  "notes": "Studied at Starbucks",
                  "studySessionDuration": "1:00",
                },
              },
            ],
          },
        },
      });
    })
  })

  let updatedState = {
    "class0": {
      "test0": {
        "TotalTimeStudiedForTest": "60",
        "showStudySessions": false,
        "studySessionList": [
          {
            "StudySession0": {
              "SelectedEndTimeValue": "03:00",
              "SelectedEndTimeValueToDisplay": "03:00 pm",
              "SelectedStartTimeValue": "02:00",
              "SelectedStartTimeValueToDisplay": "02:00 pm",
              "notes": "Studied at Starbucks",
              "studySessionDuration": "1:00",
            },
          },
        ],
      },
    },
  }

  describe('toggleShowStudySessions test', () => {
    it('should return updated state with showStudySessions set to true',  () => {
      const newState = studySessionReducer(updatedState, toggleShowStudySessions('class0', 'test0'))
      expect(newState).toEqual({
        "class0": {
          "test0": {
            "TotalTimeStudiedForTest": "60",
            "showStudySessions": true,
            "studySessionList": [
              {
                "StudySession0": {
                  "SelectedEndTimeValue": "03:00",
                  "SelectedEndTimeValueToDisplay": "03:00 pm",
                  "SelectedStartTimeValue": "02:00",
                  "SelectedStartTimeValueToDisplay": "02:00 pm",
                  "notes": "Studied at Starbucks",
                  "studySessionDuration": "1:00",
                },
              },
            ],
          },
        },
      });
    })
  })

})