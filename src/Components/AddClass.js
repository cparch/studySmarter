import React from 'react';

const AddClass = (props) => {
  return (
    <div>
      <form onSubmit={props.AddClassSubitBtnHandler}>
        <label>
          Add Class Name:
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