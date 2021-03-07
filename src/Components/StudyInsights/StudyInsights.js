import React from 'react';
import './StudyInsights.css';
import Duration from 'duration';

import { useSelector, useDispatch } from 'react-redux'



const StudyInsights = (props) => {

  const allGrades = useSelector(state => state.testGradeReducer)
  const allClassInfo = useSelector(state => state.studySessionReducer)
  const avgTimesPerGrade = {}
  const avgTimesPerGradeArray = [["A", "no Data"], ["B", "no Data"], ["C", "no Data"], ["D", "no Data"], ["F", "no Data"]]

  const getTotalTimePerGrade = (obj) => {
    const possibleGrades = ["A", "B", "C", "D", "F"]
    let gradesClassId = null
    let gradesTestId = null

    for (const classId in obj) { 
      gradesClassId = classId
      let classIdObj = obj[classId]

      for (const testID in classIdObj) {
        gradesTestId = testID
        let grade = obj[classId][testID].grade
        let totalStudyTimeForTestGrade = allClassInfo[gradesClassId][gradesTestId].TotalTimeStudiedForTest

        avgTimesPerGradeArray.map((letterGradeArr, idx) => {
          if(letterGradeArr.indexOf(grade) > -1){
            if(typeof avgTimesPerGradeArray[idx][1] == 'number'){
              avgTimesPerGradeArray[idx][1] += totalStudyTimeForTestGrade
              avgTimesPerGradeArray[idx][2] += 1
            } else {
              avgTimesPerGradeArray[idx][1] = totalStudyTimeForTestGrade
              avgTimesPerGradeArray[idx][2] = 1
            }
          }
        })
      }  
    }  
    
  }
  
  getTotalTimePerGrade(allGrades)

  avgTimesPerGradeArray.map((gradeArr, idx) => {
    if(typeof gradeArr[1] === 'number'){
      let avgTimeInMin = gradeArr[1]/ avgTimesPerGradeArray[idx][2]
      avgTimesPerGradeArray[idx][1] = props.convertMinuteToTime(avgTimeInMin)
    }
  })

  let list = avgTimesPerGradeArray.map(grade => {
    return(
      <tr key={grade[0]}>
        <td className='cell'>{grade[0]}</td>
        <td>{grade[1]}</td>
      </tr>
    )
  })

  return(
    <div >
      <div className='StudyInsightsHeaderImage'></div>
      <div className='mainContainer'>
        <h1>Study Insights </h1>
        <h3>This page is intended to give you an idea of what study habbits give you the best chance of earning a grade.</h3>
        <table>
          <thead>
            <tr>
              <th className='tableHeader'>Grade</th>
              <th className='tableHeader'>Average Study Time</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    </div>
  )
};

export default StudyInsights;