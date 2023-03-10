import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";



function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  //show all tasks
  useEffect(() => {
    const getTasks = async ()=>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async ()=>{
    const res =  await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  }
  // fetch a task
  const fetchTask = async (id)=>{
    const res =  await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }
  //Add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", { 
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data]);
  }
  
  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method : "DELETE"
    })
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  // Toggle Reminder False or true
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id? {...task, reminder : data.reminder } : task))
  };
  return (
    <div className="container">
      <Header showbtn={showAdd} onAdd={()=>{setShowAdd(!showAdd)}} />
      {showAdd && <AddTask onAdd ={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
