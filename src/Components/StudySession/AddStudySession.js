import React from 'react';
import './AddStudySession.css';
import TimeSelector from './TimeSelector.js';
import 'rc-time-picker/assets/index.css';
import {useDispatch, useSelector} from 'react-redux'
import {startTimeHandlerRedux, endTimeHandlerRedux, formHandler, showSubmitMessage, addStudySessionDetails} from '../../actions/index.js'
import Duration from 'duration';

const AddStudySession = (props) => {

  const dispatch = useDispatch();
  let startTimeValue = useSelector(state => state.FormHandlerReducer.startTimeValue);
  let endTimeValue = useSelector(state => state.FormHandlerReducer.endTimeValue);

  
  let selectedTest = useSelector(state => state.FormHandlerReducer.selectedTest)

  let SelectedStartTimeValue = useSelector(state => state.FormHandlerReducer.SelectedStartTimeValue)
  let SelectedStartTimeValueToDisplay = useSelector(state => state.FormHandlerReducer.SelectedStartTimeValueToDisplay)

  let SelectedEndTimeValue = useSelector(state => state.FormHandlerReducer.SelectedEndTimeValue)
  let SelectedEndTimeValueToDisplay = useSelector(state => state.FormHandlerReducer.SelectedEndTimeValueToDisplay)

  let notes = useSelector(state => state.FormHandlerReducer.notes);


  let testObj = useSelector(state => state.testReducer);
  let classesObj = useSelector(state => state.classesReducer);
  let selectedClass = useSelector(state => state.FormHandlerReducer.selectedClass)
  
  let testListObj = testObj[classesObj.allID[selectedClass]];
  let chosenClassTestList = []

  for(const key in testListObj){
    chosenClassTestList.push(testListObj[key].testTitle)
  }

  // this func will return an obj with the time in a HH:MM format (i.e. 1:30), and total number of minutes
  const getStudySessionDuration = (StartTime, EndTime) => {
    let startDate = new Date("October 13, 2014 " + StartTime)
    let endDate = new Date("October 13, 2014 " + EndTime)
    let studySessionDuration = endDate - startDate
    let durationInHours = studySessionDuration / 3600000
    let durationInMinutes = studySessionDuration/60000
    let durationInHoursSplit = durationInHours.toString().split('.')
    let convertSecondsToDecimal = '.' + durationInHoursSplit[1]
    let durationInTimeFormat = durationInHoursSplit[0] +':'+  Math.ceil(convertSecondsToDecimal * 60)
    
    if(isNaN(durationInTimeFormat.split(':')[1])) {
      let updateTime = durationInTimeFormat.split(':')
      updateTime[1] = '00'
      durationInTimeFormat = updateTime.join(':')
    }

    if(durationInTimeFormat.split(':')[1].length < 2) {
      let updateTime = durationInTimeFormat.split(':')
      updateTime[1] = '0'+ updateTime[1]
      durationInTimeFormat = updateTime.join(':')
    }

    return {durationInTimeFormat, durationInMinutes}
  }

  const submit = (event) => {
    event.preventDefault();
    let studySessionDuration = getStudySessionDuration(SelectedStartTimeValue, SelectedEndTimeValue)
    
    dispatch(addStudySessionDetails(selectedClass, selectedTest, notes, SelectedStartTimeValue, SelectedStartTimeValueToDisplay, SelectedEndTimeValue, SelectedEndTimeValueToDisplay, studySessionDuration.durationInTimeFormat, studySessionDuration.durationInMinutes))
    dispatch(showSubmitMessage())
  }

  const handleStudySessionStartTime = (value) => {
    dispatch(startTimeHandlerRedux({
      startTimeValue: value,
      SelectedStartTimeValueToDisplay: value && value.format('LT'),
      SelectedStartTimeValue: value && value.format('HH:mm') 
    }))
  }

  const handleStudySessionEndTime = (value) => {
    dispatch(endTimeHandlerRedux({
      EndTimeValue: value,
      SelectedEndTimeValueToDisplay: value && value.format('LT'),
      SelectedEndTimeValue: value && value.format('HH:mm') 
    }))
  }


  return(
    <div>
      <div className='AddStudySessionHeaderImage'></div>
      <div className='mainContainer'>
        <h1>Add Study Session</h1>
        <form onSubmit={(event) => submit(event)}>
          <label>
            <select name="selectedClass" onChange={(event) => dispatch(formHandler(event))}>
            <option>Class Name:</option> 
              {classesObj.allID.map((className, idx) => (
                <option  key={classesObj.byID[className].classTitle} value={idx} data-test="class-option">
                  {classesObj.byID[className].classTitle}
                </option>
              ))}
            </select>
          </label>
          <br></br>
          <label>
            <select name="selectedTest" onChange={(event) => dispatch(formHandler(event))}> 
            <option>Test Name:</option> 
                {chosenClassTestList.map((test, idx) => (
                  <option key={test} value={idx} data-test="test-option">
                    {test}
                  </option>
                ))}

            </select>
          </label>
          <br></br>
          
          <div className='timeSelector'>
            <label >
              Start:
              <TimeSelector
                id = "startTimePicker"
                TimeValue={startTimeValue}              
                timeHandler={handleStudySessionStartTime}
              />
            </label>
            <label>
              End:
              <TimeSelector
                id = "endTimePicker"
                TimeValue={endTimeValue}
                timeHandler={handleStudySessionEndTime}
              />
            </label>
          </div>
          <br></br>
          <label>
            <div> Notes:</div>
              <textarea
                onChange={(event) => dispatch(formHandler(event))}
                name="notes"
                type="text" 
                value = {notes}
              />
            </label>
          
          <br></br>
          <input className='button' type="submit" value="Submit" />
        </form>
      </div>
    </div>
    
  )
}

export default AddStudySession;