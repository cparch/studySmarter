import React from 'react';
import './AddClass.css';

import Input from './Reusable Components/Input.js';
import {useDispatch, useSelector} from 'react-redux'
import {formHandler, showSubmitMessage} from '../actions/index.js'

const AddClass = (props) => {
  const dispatch = useDispatch()
  const classValue = useSelector(state => state.FormHandlerReducer.classNameToAdd)

  const submit = (event, classValue) => {
    event.preventDefault();
    console.log("Submit Clicked")
    props.AddClassSubmitBtnHandler(event, classValue)
    dispatch(showSubmitMessage())
  }

  return (
    <div>
      <div className='AddClassHeaderImage' id='test'></div>
      <div className='mainContainer'>
        <h1>Add Class Name</h1>
        {/* <form className='test' onSubmit={(event) => props.AddClassSubmitBtnHandler(event, classValue)}> */}
        <form className='test' onSubmit={(event) => submit(event, classValue)}>

          <Input
            className="enzymeTest"
            placeholder="New History 101" 
            name='classNameToAdd' 
            onChangeFunc={(event) => dispatch(formHandler(event))}
            value={classValue}
            label="Class Name"
          />
          <br/>
          <input className='button' type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default AddClass;