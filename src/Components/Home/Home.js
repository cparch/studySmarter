import React from 'react';
import ShowTest from './ShowTest.js'
import './Home.css';

const Home = (props) => {
  const courseNames = props.classList.map((courseInfo, idx) => {
    
    let displayClassInfo = null

    if(courseInfo.homePageShowClassInfo){
      displayClassInfo = <ShowTest
        courseInfo={courseInfo}
        classIdx={idx}
        homePageShowTestStudySessions={props.homePageShowTestStudySessions}
      />
    }
    
    return(
      <div 
        className='courseContainer'
        key={courseInfo.classTitle}
      >
        <div
          className='courseTitle' 
          onClick={() => props.homePageShowClassInfo(idx)}

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
      <div className='homeImage'/>
      <h2>
        Class Names: 
        </h2>
      <div>
        {courseNames}
      </div>
    </div>
  )
};

export default Home;