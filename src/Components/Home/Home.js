import React from 'react';
import ShowTest from './ShowTest.js'
import './Home.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {toggleShowTests} from '../../actions/index.js'


const Home = (props) => {
  const classList = useSelector(state => state.classesReducer.allID)
  const classInfo = useSelector(state => state.classesReducer.byID)
  const showTestList = useSelector(state => state.homePageReducer)
  const dispatch = useDispatch()

  const courseNames = classList.map((classId, idx) => {
    let classTitle = classInfo[classId].classTitle    
    let displayClassInfo = null

    if(showTestList[classId].ShowTests){
      displayClassInfo = <ShowTest
        classId={classId}
        convertMinuteToTime = {props.convertMinuteToTime}
        classIdx={idx}
        homePageShowTestStudySessions={props.homePageShowTestStudySessions}
      />
    }
    
    return(
      <div 
        className='courseContainer'
        key={classTitle}
        data-test="classTitleComponent"
      >
        <div
          className='courseInfo' 
          onClick={() =>  dispatch(toggleShowTests(classId))}
        >
          <div className='courseTitle' >{classTitle} </div>
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
      <div className='mainContainer' data-test="homePageComponent">
        <h1>Class Names: </h1>
        <h4>Want to see your Study Sessions? Below click on the class name, then the test name.</h4>
        <div>{courseNames}</div>
      </div>
    </div>
  )
};

export default Home;