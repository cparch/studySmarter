import React from 'react';
import ShowTest from './ShowTest.js'

const Home = (props) => {
  const courseNames = props.classList.map((courseInfo) => {
    return(
      <div>
          {courseInfo.classTitle}   
      </div>
    )
  })

  return (
    <div>
      <div>
        Class Names:
      </div>
      <div>
        {courseNames}
      </div>
      <ShowTest/>
    </div>
  )
};

export default Home;