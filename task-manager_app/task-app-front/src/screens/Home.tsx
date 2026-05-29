import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Filterbar from "../components/FilterBar";
import TaskCard from "../components/TaskCard";
import "../styles/Home.css";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="home-container">
      <div className="home-card">

        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <div className="task-top-bar">

          <input className="add-task-input" placeholder="Add Task"/>


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