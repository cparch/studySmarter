import {submitAcknowledged, showSubmitMessage} from './../actions/index'
import submitAlertReducer from './submitAlert';

describe('submitAlertReducer reducer test', () => {
  it('should return default state',  () => {
    const newState = submitAlertReducer(undefined, {})
    expect(newState).toEqual({showSubmitConfirmation: false});
  })

  describe('submitAcknowledged test', () => {
    it('should return updated state with showSubmitConfirmation as false',  () => {
      const newState = submitAlertReducer(undefined, submitAcknowledged())
      expect(newState).toEqual({showSubmitConfirmation: false});
    })
  })

  describe('showSubmitMessage test', () => {
    it('should return updated state with showSubmitConfirmation as false',  () => {
      const newState = submitAlertReducer(undefined, showSubmitMessage())
      expect(newState).toEqual({showSubmitConfirmation: true});
    })
  })

})