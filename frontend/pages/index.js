import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { task: "Sample Task 1" },
    { task: "Sample Task 2" },
    { task: "Sample Task 3" },
    { task: "Sample Task 4" },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { task: newTask }]);
    setNewTask("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App</h1>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t.task}</li>
        ))}
      </ul>

      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}