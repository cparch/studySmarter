import React from 'react';

const ShowTests = (props) => {

  let listItems = props.courseInfo.test.map((testInfo) =>{
    return(
      <div>
        {testInfo.testName}
      </div> 
    )
  });

  return(
    <div>
      {listItems}
    </div>
  )
};

export default ShowTests;