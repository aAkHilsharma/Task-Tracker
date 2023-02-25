import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
        id : "1",
        text: "Doctr's Appointment",
        date: "28 Feb 2023 2:30 pm",
        reminder: "true"
    },
    {
        id : "2",
        text: "Study Java",
        date: "27 Feb 2023 5:00 pm",
        reminder: "true"
    },
    {
        id : "3",
        text: "Eat healthy Food",
        date: "26 Feb 2023 8:00 pm",
        reminder: "false"
    },
  ])

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>{
      return task.id !== id;
    }))  
  }
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
