import React from 'react';

const AddGrade = (props) => {
  return(
    <div>
      <div>
        Add test grade!!!
      </div>

      {/* <form> */}
      <form onSubmit={props.AddGradeHandler}>
        <label>
          Class Name:

          <select name="selectedClass" onChange={props.FormHandler}> 
            {props.classes.map((classes, idx) => (
              <option  key={classes.classTitle} value={idx}>
                {classes.classTitle}
              </option>
            ))}
          </select>
        </label>
        <br></br>
        <br></br>

        <label>
          Test Name:
          <select name="selectedTest" onChange={props.FormHandler}> 
              {props.tests.map((test, idx) => (
                <option key={test.testName} value={idx}>
                  {test.testName}
                </option>
              ))}
          </select>
        </label>
        <br></br>
        <br></br>

        <label>
          Grade:
          <input 
            type='text' 
            placeholder='A'
            onChange={props.FormHandler}
            name="gradeInput"
          />
        </label>
        <br></br>
        <br></br>
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default AddGrade;