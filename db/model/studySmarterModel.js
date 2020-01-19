const mongoose = require('mongoose');
const db = require('../index');

const classDataSchema = new mongoose.Schema({
  classTitle: String,
  test:Array,
});

const classData = mongoose.model('classData', classDataSchema);


// This function will add a new class
module.exports.add = (param, callback) => {
// let add = (param, callback) => {

  let ClassToAdd = new classData ({
    classTitle: param.classTitle,
    // test: param.test,
  })

  ClassToAdd.save(callback)
  console.log("new document saved")
}

//test:
// change the function definition from "module.exports.add" to "let add".
// add({
//   classTitle: "Math 101",
//   test:[],
// }, (err, success) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(success)
//   }
// })
//==================

//==================
//this function will get all data
module.exports.get = (callback) => {
// let get = (callback) => {
  classData.find((err, success) => {
    callback(err, success)
  })
}

// //TEST
// get((err, success) => {
//   if (err) {console.log(err)
//   } else {
//     console.log(success)
//   }
// })
//==================

//==================
//this function will add a new test to a class
module.exports.addNewTest = (param, callback) => {
// let addNewTest = (param, callback) => {
  let testDetails = {
    testName: param.testName,
    homePageShowStudySessions: param.homePageShowStudySessions,
    grade: param.grade,
    totalTimeStudiedPerTest: param.totalTimeStudiedPerTest,
    studySession: [],
  }
  classData.findOneAndUpdate({"classTitle" : param.classTitle},{$push: {test: testDetails}}, (err, success) => {
    callback(err, success)
  })
}


// //TEST
// addNewTest({
//   classTitle: "Math 101",
//   testName: "Math Advanced",
//   homePageShowStudySessions: false,
//   grade: "",
//   totalTimeStudiedPerTest: "0:00",
//   studySession: [],

// },(err, success) => {
//   if (err) {console.log(err)
//   } else {
//     console.log(success)
//   }
// })

//==================

//==================
// this function will find a test and add a study session

module.exports.addNewStudySession = (param, callback) => {
// let addNewStudySession = (param, callback) => {
  let studySessionDetails = {
    endTimeToDisplay: param.endTimeToDisplay,
    endTime: param.endTime,
    notes: param.notes,
    startTimeToDisplay: param.startTimeToDisplay,
    startTime: param.startTimeToDisplay,
    studySessionNum: param.studySessionNum,
    studySessionDuration: param.studySessionDuration
  }
  // classData.findOneAndUpdate({"classTitle" : param.classTitle},{$push: {"test.1.studySession": studySessionDetails}}, (err, success) => {
    classData.findOneAndUpdate({"classTitle" : param.classTitle},{$push: {[`test.${param.testIdx}.studySession`]: studySessionDetails}}, (err, success) => {
    callback(err, success)
  })
}

  // //TEST
//   addNewStudySession({
//     classTitle: "Math 101",
//     testIdx: 1,
//     endTimeToDisplay: "5:50 PM",
//     endTime: "17:50",
//     notes: "Study at Peets",
//     startTimeToDisplay: "1:50 PM",
//     startTime: "13:50",
//     studySessionNum: 'psychT1 - study session 0',
//     studySessionDuration: "1:00"
//   },(err, success) => {
//     if (err) {console.log(err)
//     } else {
//       console.log(success)
//     }
// })

//==================
//==================
// this func will add a grade to a specific class > test

module.exports.addNewTestGrade = (param, callback) => {
// let addNewTestGrade = (param, callback) => {
    classData.findOneAndUpdate({"classTitle" : param.classTitle},{$set: {[`test.${param.testIdx}.grade`]: param.grade}}, (err, success) => {
    callback(err, success)
  })
}

   // //TEST
//    addNewTestGrade({
//     classTitle: "Math 101",
//     testIdx: 1,
//     grade: "A"
//   },(err, success) => {
//     if (err) {console.log(err)
//     } else {
//       console.log(success)
//     }
// })
//==================
