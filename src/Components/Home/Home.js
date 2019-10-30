import React from 'react';
import ShowTest from './ShowTest.js'

const Home = (props) => {
  const courseNames = props.classList.map((courseInfo) => {
    return(
      <div>
        <div>
          {courseInfo.classTitle} 
        </div>
          
        <div>
          <ShowTest
            courseInfo={courseInfo}
            // classIdx={idx}
            // homePageShowTestStudySessions={props.homePageShowTestStudySessions}
          />
        </div>  
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
    </div>
  )
};

export default Home;