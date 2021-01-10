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


  console.log('classList: ', classList)

//this is what was passed initially
  console.log("props.classList: ", props.classList)
  // const courseNames = props.classList.map((courseInfo, idx) => {
  const courseNames = classList.map((classId, idx) => {

    console.log('classID: ',classId )
    // console.log('className: ', classInfo[classId].classTitle)

    let classTitle = classInfo[classId].classTitle
//11/21: create a homepage Handler that keeps track of whats going on in the home page. homePageShowClassInfo... if true show a list of tests for that class. homePageShowTestStudySessions.... if true show the study sessions.   when user pressed submit to add a test, we will also invoke a function that will add to the homePage handler
    
    let displayClassInfo = null

    // if(courseInfo.homePageShowClassInfo){
    if(showTestList[classId].ShowTests){
      // console.log("***** show test list")
      displayClassInfo = <ShowTest
        // courseInfo={courseInfo}
        classId={classId}

        classIdx={idx}
        homePageShowTestStudySessions={props.homePageShowTestStudySessions}
      />
    }
    
    return(
      <div 
        className='courseContainer'
        key={classTitle}

      >
        <div
          className='courseInfo' 
          // onClick={() => props.homePageShowClassInfo(idx)}
          onClick={() =>  dispatch(toggleShowTests(classId))
          }
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
      <div className='mainContainer'>
        <h1>Class Names: </h1>
        <h4>Want to see your Study Sessions? Below click on the class name, then the test name.</h4>
        <div>{courseNames}</div>
      </div>
    </div>
  )
};

export default Home;