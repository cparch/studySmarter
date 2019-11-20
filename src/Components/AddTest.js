import React from 'react';
import './AddTest.css';

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
          <label>
            Test I'm Studying For:
            <input
              value={props.entireState.testNameToAdd} 
              onChange={props.FormHandler} 
              type='text' 
              placeholder='Chapter 1 test' 
              name='testNameToAdd'
            />
          </label>
          <br/>
          <input className='button' type="submit" value="Submit" />
        </form>
      </div>
      
    </div>
  )
};

export default AddTest;