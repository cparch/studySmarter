import React from 'react';
import './SubmitAlert.css';

const SubmitAlert = (props) => {

  let toDisplay = null

  if(props.showSubmitConfirmation){
    toDisplay =  <div className='submitAlertContainer'>
       <div className='submitAlertContent'>
        <div>
          Your entrie has been submitted.
        </div>
        <button onClick={props.submitAcknowledged}>ok</button>
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