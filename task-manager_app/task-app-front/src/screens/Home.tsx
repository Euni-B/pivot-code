const tasks = [
    {
        id: 1,
        title: "Finish React login page",
        status: "In Progress",
    },
    {
        id: 2,
        title: "Study React Router",
        status: "Completed",
    },
    {
        id: 3,
        title: "Build Home Page",
        status: "Todo",
    },
];

function Home() {
    return (
        <div>
            <h1>🐱 Task Manager</h1>

            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>Status: {task.status}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;