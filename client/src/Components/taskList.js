import React from 'react';
import axios from 'axios';

class taskList extends React.Component {
 state={
        task:"", //current user entered task
        taskList:[] //hold list of tasks from db
    }
    componentDidMount(){
        this.getTaskList();
    }
    getTaskList=()=>{
        axios.get('http://localhost:4000/task')
        .then((response) => response.data)
        .then(response => 
        this.setState({taskList: response}))
    }
    onDeleteClick = (taskid) => {
        axios.delete(`http://localhost:4000/deleteTask/${taskid}`)//console.log('inside delete')
        this.getTaskList();
    }
    onSubmitClick = () => {
        axios.post('http://localhost:4000/addTask',{
           task: this.state.task 
        });
        this.getTaskList();
        this.setState({task : ""})
    }
   onDoneClick = (taskid) => {
       alert(`good for you`)
       axios.delete(`http://localhost:4000/deleteTask/${taskid}`)
       this.getTaskList();
    }

    render(){
  return (
      <div>
    <h3>TASK LIST</h3>
    <div className='ui input'>
    <input value ={this.state.task} onChange={e => this.setState({
        task:e.target.value
        })} placeholder='Your Tasks..'/>
    </div>
    
    <button className='ui primary button basic' onClick={()=>this.onSubmitClick()}> Submit</button>
    <hr/>
    <h4>Here are your Tasks for today</h4>
    <div className="ui cards">
    {this.state.taskList.map((task) => ( 
    <div className="card">
    <div className="content">
    <div className="meta"> {task.task}</div> 
      <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={() => this.onDoneClick(task.taskid)}>Done</div>
        <div className="ui basic red button" onClick={() => this.onDeleteClick(task.taskid)} >Delete</div> 
      </div>  
      </div> 
    </div>
</div>
 ))}  
</div>
</div>)}}

export default taskList