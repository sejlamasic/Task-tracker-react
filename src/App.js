
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import  React from 'react'
import {useState,useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
 const App=() =>{
   const [showAddTask,setShowAddTask]=useState(false)
    const [tasks,setTasks]=useState([
      
        {
          "id":1,
          "text":"Doctorss Appointement",
          "day":"Feb 5th at 2:30pm",
          "reminder":true
        },
        {
          "id":2,
          "text":"Meeting at School",
          "day":"Feb 6th at 1:30",
          "reminder":true
        },
        {
          "id":3,
          "text":"Sastanak neki ",
          "day":"April 2nd at 7:30pm",
          "reminder":true
        }
    
    ])  


// Delete task
    const deleteTask=(id)=>{
      
      setTasks(tasks.filter((task)=> task.id !== id))
    }
//Add Task
const addTask=(task)=>{
  const id=Math.floor(Math.random()*1000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}
//Toggle Reminder
const toggleReminder=(id)=>{
setTasks(tasks.map((task)=> task.id===id ?
{...task,reminder:!task.reminder }:task)
)

}
    return ( 
      <Router>
   <div className="container" >
   <Header onAdd={()=>setShowAddTask (!showAddTask)} 
   showAdd={showAddTask} />
   
  <Route path='/' exact render={(props)=>(
    <>
    {showAddTask && <AddTask onAdd={addTask}/>}

{tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}
onToggle={toggleReminder}/> 
: 'No Tasks To Show'}
    </>
  )}/>
 <Route path='/about' component={About}/>
<Footer />
</div>
</Router>
  ) 
} 

export default App;

