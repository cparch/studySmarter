const mongoose = require('mongoose');
const db = require('../index');

const classDataSchema = new mongoose.Schema({
  classTitle: String,
  test:Array,
});

const classData = mongoose.model('classData', classDataSchema);


// This function will add a new class
module.exports.add = (param, callback) => {
  let ClassToAdd = new classData ({
    classTitle: param.classTitle,
    test: param.test,
  })

  ClassToAdd.save(callback)
  console.log("new document saved")
}

//test:
// change the function definition from "module.exports.add" to "let add".
// add({
//   classTitle: "Wood Working 101",
//   test:["hello"],
// }, (err, success) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(success)
//   }
// })