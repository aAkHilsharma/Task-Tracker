import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
        id : "1",
        text: "Doctr's Appointment",
        reminder: "true"
    },
    {
        id : "2",
        text: "Study Java",
        reminder: "true"
    },
    {
        id : "3",
        text: "Eat healthy Food",
        reminder: "false"
    },
  ])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
