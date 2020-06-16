import React from 'react';
import './SubmitAlert.css';
import {useDispatch, useSelector} from 'react-redux'
import {submitAcknowledged} from '../../../actions/index'

const SubmitAlert = (props) => {
  const dispatch = useDispatch()
  let toDisplay = null
  const showSubmitConfirmation = useSelector(state => state.submitAlertReducer.showSubmitConfirmation);

  if(showSubmitConfirmation){
    toDisplay =  <div className='submitAlertContainer'>
       <div className='submitAlertContent'>
        <div>
          Your entrie has been submitted.
        </div>
        <button onClick={() => dispatch(submitAcknowledged())}>ok</button>
        </div>
      </div>
  }
  return(
    <div>
      {toDisplay}
    </div>
  )
}

export default SubmitAlert;