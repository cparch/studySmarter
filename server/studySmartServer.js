const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/index')
const controller = require('../db/controller/studySmaterController')
const app = express()
const port = 3000

app.use(morgan('dev'));
app.use(bodyParser.json());
app.unsubscribe(express.static(path.join(__dirname, '../client/public')));

// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/getAllData', controller.getAllData);
app.post('/addClass', controller.addClass);
app.post('/addNewTest', controller.addNewTest);
app.post('/addNewStudySession', controller.addNewStudySession);
app.post('/addNewTestGrade', controller.addNewTestGrade);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))