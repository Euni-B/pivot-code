import { FaTrashAlt } from "react-icons/fa";
import { type Task } from "../screens/Home";
import "./TaskCard.css";

type TaskCardProps = {
  task: Task;
};

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="task-card">

      <div className="task-left">

        <span
          className={`status-pill ${task.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {task.status}
        </span>

        <p className="task-title">
          {task.title}
        </p>

      </div>

      <button className="trash-btn">
        <FaTrashAlt />
      </button>

    </div>
  );
}

export default TaskCard;