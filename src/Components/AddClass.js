import React from 'react';

const AddClass = (props) => {
  return (
    <div>
      <h1>Add Class Name</h1>
      <form onSubmit={props.AddClassSubitBtnHandler}>
        <label>
          Class Name to add: 
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