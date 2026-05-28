import { FaTrash, FaRegCircle } from "react-icons/fa";
import { type Task } from "../screens/Home";

type TaskCardProps = {
  task: Task;
};

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="task-card">

      <div className="task-left">
        <div className="task-icon">
          <FaRegCircle />
        </div>

        <p>{task.title}</p>
      </div>

      <button className="trash-btn">
        <FaTrash />
      </button>

    </div>
  );
}

export default TaskCard;