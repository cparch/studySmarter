const gradeInfo = require('../model/studySmarterModel');

exports.getAllData = (req, res) => {
  gradeInfo.get((err, success) => {
    if(err){
      res.status(500).end();
      console.log("Error getAllData: ", err)
    }
    res.send(success)
  })
}

exports.addClass = (req, res) => {
  gradeInfo.add(req.body, (err, success) => {
    if(err){
      res.status(500).end()
      console.log("Error addClass: ", err)
    } else {
      res.status(200).end();
      console.log("New Class Added to DB")
    }
  })
}

exports.addNewTest = (req, res) => {
  gradeInfo.addNewTest(req.body, (err, success) => {
    if(err){
      res.send(500).end();
      console.log("Error addNewTest: ", err);
    } else {
      res.status(200).end();
      console.log("New Test Added to DB")
    }
  })
}

exports.addNewStudySession = (req, res) => {
  gradeInfo.addNewStudySession(req.body, (err, success) => {
    if(err){
      res.send(500).end();
      console.log("Error addNewStudySession: ", err)
    } else {
      res.status(200).end();
      console.log("New Study Session Added to DB")
    }
  })
}

exports.addNewTestGrade = (req, res) => {
  gradeInfo.addNewTestGrade(req.body, (err, success) => {
    if(err){
      res.send(500).end();
      console.log("Error addNewTestGrade: ", err);
    } else {
      res.status(200).end()
      console.log("New Grade Added to DB")
    }
  })
}