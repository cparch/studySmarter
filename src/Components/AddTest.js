import React from 'react';

const AddTest = (props) => {

  return(
    <div>
      <form>
        <label>
            Class Name:
            <select> 
              {props.classes.map((classes) => (
                <option key={classes.classTitle}>
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
            type='text' 
            placeholder='Chapter 1 test' 
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