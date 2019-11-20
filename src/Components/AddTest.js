import React from 'react';
import './AddTest.css';
import Input from './Reusable Components/Input.js';

const AddTest = (props) => {

  return(
    <div>
      <div className='addTestHeaderImage'></div>
      <div className='mainContainer'>
      <h1>Add Test</h1>
        <form 
          onSubmit={props.AddTestSubmitBtnHandler}
          className='addTestForm'
        >
          <label>
              Class Name:
              <select name="selectedClass" onChange={props.FormHandler}> 
                {props.entireState.classes.map((classes, idx) => (
                  <option key={classes.classTitle} value={idx}>
                    {classes.classTitle}
                  </option>
                ))}
              </select>
          </label>
          <br/>
          <Input
            placeholder='Chapter 1 test'
            name='testNameToAdd'
            onChangeFunc={props.FormHandler}
            value={props.entireState.testNameToAdd}
            label="Test I'm Studying For"
          
          />
          <br/>
          <input className='button' type="submit" value="Submit" />
        </form>
      </div>
      
    </div>
  )
};

export default AddTest;