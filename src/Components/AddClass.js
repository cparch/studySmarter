import React from 'react';
import './AddClass.css';

import Input from './Reusable Components/Input.js';

const AddClass = (props) => {
  return (
    <div>
      <div className='AddClassHeaderImage' id='test'></div>
      <div className='mainContainer'>
        <h1>Add Class Name</h1>
        <form className='test' onSubmit={props.AddClassSubmitBtnHandler}>
          <Input
            className="enzymeTest"
            placeholder="New History 101" 
            name='classNameToAdd' 
            onChangeFunc={props.FormHandler}
            value={props.classNameToAdd}
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