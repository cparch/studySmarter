import React from 'react';

const AddClass = (props) => {
  return (
    <div>
      <form>
        <label>
          Add Class Name:
          <input type='text' placeholder='History 101'/>
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default AddClass;