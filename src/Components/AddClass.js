import React from 'react';

const AddClass = (props) => {
  return (
    <div>
      <form onSubmit={props.AddClassSubitBtnHandler}>
        <label>
          <h2>Add Class Name:</h2>
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
  )
};

export default AddClass;