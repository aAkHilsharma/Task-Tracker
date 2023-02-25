import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div onDoubleClick={()=>onToggle(task.id)} className={`task ${task.reminder ? 'reminder': ''}`}>
            <h3>
                {task.text}{" "}
                <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={()=>onDelete(task.id)}
                />
            </h3>
            <p>{task.date}</p>
    </div>
  );
};

export default Task;
