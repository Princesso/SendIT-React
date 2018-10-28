const express = require('express');
const bodyParser = require('body-parser');
import cors from 'cors';
const models = require('./models')
const app = express();
var path = require('path');

//general internal route settings
const taskRoute = require('./routes/task')
const employeeRoute =require('./routes/employee')


//internal use
app.use('/task', taskRoute)
app.use('/employee',employeeRoute)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//to add to task table
const task = models.task.build({
  title: "Cook",
  description: "cook food",
  priority: 1,
  iscompleted: false
})
//always save it to db after creating it
// task.save().then((newTask)=>{
//   console.log(newTask)
// })

//in models find a table task and select all from it. nb no arguments in findone

// models.task.findOne().then((task)=>{
//   console.log(task)
// })

//another way to select all. a where clause can also be passed in to find all, where...

// models.task.findAll().then((tasks)=>{
//   console.log(tasks)
// })

//findOne method with a filter or fetch a particular task

// models.task.findOne({
//   where :{
//     title: "Call home"
//   }
// }).then((task)=>{
//     console.log(task)
//   })

//find a record by ID in the task table

// models.task.findById(3).then((task) => {
//   console.log(task);
// })

//delete a record

models.task.destroy({
  where : {
    title: "Call home"
  }
}).then(()=>{

})



// define access policies
app.use(
  cors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Hello Boo'});
});


app.listen(8080, () => console.log('app stareted on port 8080'));