const express = require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const connection = require('./db')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/task',(req,res)=>{
    const TASK_QUERY="select * from todotaskmanager.tasks"       //res.send('list of all task')
    connection.query(TASK_QUERY,(err, response)=>{
        if(err){console.log(err)} 
        else {res.send(response)}
      })
})

app.post('/addTask',(req,res)=>{
    const ADD_QUERY = `insert into todotaskmanager.tasks (task) values ('${req.body.task}')` //console.log(req.body)
    connection.query(ADD_QUERY,(err)=>{
      if(err) console.log(err)
      else res.send('task has been added')
    })
   // res.send('you can add tasks')
})

app.delete('/deleteTask/:taskid',(req,res)=>{
    const DELETE_QUERY=`DELETE from todotaskmanager.tasks where(taskid=${req.params.taskid})`//console.log(req.params.taskid)//res.send('deleted task')
    connection.query(DELETE_QUERY,(err,res)=>{
        if(err) {console.log(err);}     // console.log(req.params.taskid)
       })
   
})

app.listen(4000,()=>{
    console.log('running on port 4000')
})