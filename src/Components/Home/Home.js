import React from 'react';
import ShowTest from './ShowTest.js'

const Home = (props) => {
  const courseNames = props.classList.map((courseInfo, idx) => {
    
    let displayClassInfo = null

    if(courseInfo.homePageShowClassInfo){
      displayClassInfo = <ShowTest
        courseInfo={courseInfo}
      />
    }
    
    return(
      <div>
        <div 
          onClick={() => props.homePageShowClassInfo(idx)}
          key={courseInfo.classTitle}
        >
          {courseInfo.classTitle} 
        </div>
        <div>
          {displayClassInfo}
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