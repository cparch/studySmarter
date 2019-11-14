import React from 'react';
import './StudyInsights.css';
import Duration from 'duration';

class StudyInsights extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      classes: props.classes,
      avgTimesPerGrade: {},
      avgTimesPerGradeArray: [["A", "no Data"], ["B", "no Data"], ["C", "no Data"], ["D", "no Data"], ["F", "no Data"]]
    }
    this.FindAvgStudyTimePerGrade = this.FindAvgStudyTimePerGrade.bind(this);
    this.fromObjToArray = this.fromObjToArray.bind(this);
  }

  FindAvgStudyTimePerGrade(listOfClasses){
    let totalPerGrade = this.state.avgTimesPerGrade;

    listOfClasses.forEach( course => {
      course.test.forEach(test => {
        if(test.grade.length > 0){

          if(totalPerGrade[test.grade]){
            totalPerGrade[test.grade].count += 1;
            totalPerGrade[test.grade].totalStudyTimePerTest.push(test.totalTimeStudiedPerTest)
          } else {
            totalPerGrade[test.grade] = {
              count: 1,
              totalStudyTimePerTest: [test.totalTimeStudiedPerTest]
            }
          }
        }
      })
    })

    for(let key in totalPerGrade){
      let timeInMin = 0;
  
      totalPerGrade[key].totalStudyTimePerTest.forEach( time => {
        
        let timeSplit= time.split(':')
        let hoursToMin = Number(timeSplit[0]) * 60
        let hoursPlusMin = hoursToMin + Number(timeSplit[1])
  
        timeInMin += hoursPlusMin 
      })

      let avgMin = timeInMin/totalPerGrade[key].count;
      let endDate = new Date(0,0,0);

      endDate.setMinutes(endDate.getMinutes() + avgMin)
      let duration = new Duration(new Date(0, 0, 0), endDate).toString("%Hs:%M");

      totalPerGrade[key].avgTime = duration
    }
    this.setState({avgTimesPerGrade: totalPerGrade})
    this.fromObjToArray(this.state.avgTimesPerGrade)
  }

  fromObjToArray(obj){
    let updateAvgTimesPerGradeArray = [...this.state.avgTimesPerGradeArray];

    for(let key in this.state.avgTimesPerGrade){
      updateAvgTimesPerGradeArray.forEach((grade, idx) => {
    
        if(grade[0] === key){
          updateAvgTimesPerGradeArray[idx][1] = `${this.state.avgTimesPerGrade[key].avgTime} hours`
        }
      })
    }
  }

  componentDidMount() {
    this.FindAvgStudyTimePerGrade(this.state.classes)
  }
  render(){
    let list = this.state.avgTimesPerGradeArray.map(grade => {
      return(
        <tr key={grade[0]}>
          <td className='cell'>{grade[0]}</td>
          <td>{grade[1]}</td>
        </tr>
      )
    })

    return(
      <div>
        <h1>Study Insights </h1>
        <h3>This page is intended to give you an idea of what study habbits give you the best chance of earning a grade.</h3>
        <table id="myTable">
          <thead>
            <tr>
              <th className='cell tableHeader'>Grade</th>
              <th className='tableHeader'>Average Study Time</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    )
  }
};

export default StudyInsights;