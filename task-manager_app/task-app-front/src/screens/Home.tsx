import Header from "../components/Header";
import Filterbar from "../components/Filterbar";
import TaskCard from "../components/TaskCard";
import "./Home.css";

export type Task = {
  id: number;
  title: string;
  status: string;
};

const tasks: Task[] = [
  {
    id: 1,
    title: "buy milk",
    status: "Doing",
  },
  {
    id: 2,
    title: "read a book",
    status: "To Do",
  },
  {
    id: 3,
    title: "buy a car",
    status: "Done",
  },
];

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">

        <Header />

        <div className="task-top-bar">
          <button className="add-task-btn">
            Add Task
          </button>
        </div>

        <Filterbar />

        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;