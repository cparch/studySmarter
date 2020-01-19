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