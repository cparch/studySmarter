const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/studySmarter';

// const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connect(mongoURI, { useUnifiedTopology: true });




db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

module.exports = db;