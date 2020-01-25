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
          className='courseInfo' 
          onClick={() => props.homePageShowClassInfo(idx)}
        >
          <div className='courseTitle' >{courseInfo.classTitle} </div>
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
      <div className='mainContainer'>
        <h1>Class Names: </h1>
        <h4>Want to see your Study Sessions? Below click on the class name, then the test name.</h4>
        <div>{courseNames}</div>
      </div>
    </div>
  )
};

export default Home;