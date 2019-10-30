import React from 'react';

const AddTest = (props) => {

  return(
    <div>
      <form onSubmit={props.AddTestSubmitBtnHandler}>
        <label>
            Class Name:
            <select name="selectedClass" onChange={props.FormHandler}> 
              {props.classes.map((classes, idx) => (
                <option key={classes.classTitle} value={idx}>
                  {classes.classTitle}
                </option>
              ))}
            </select>
        </label>
        <br/>
        <br/>
        <label>
          Add new Test To Study For:
          <input
            value={props.testNameToAdd} 
            onChange={props.FormHandler} 
            type='text' 
            placeholder='Chapter 1 test' 
            name='testNameToAdd'
          />
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default AddTest;