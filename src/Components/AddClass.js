import React from 'react';
import './AddClass.css';

const AddClass = (props) => {
  return (
    <div>
      <div className='AddClassHeaderImage'></div>
      <div className='mainContainer'>
        <h1>Add Class Name</h1>
        <form onSubmit={props.AddClassSubitBtnHandler}>
          <label>
            Class Name: 
            <input 
              value={props.classNameToAdd}
              onChange={props.FormHandler}
              type='text' 
              placeholder='History 101'
              name='classNameToAdd'
            />
          </label>
          <br/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default AddClass;