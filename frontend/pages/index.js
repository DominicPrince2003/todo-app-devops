import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Read API URL from env
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!apiUrl) return;
    axios
      .get(`${apiUrl}/tasks`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, [apiUrl]);

  const addTask = async () => {
    if (!apiUrl) return;
    await axios.post(`${apiUrl}/tasks`, { task: newTask });
    setNewTask("");
    const res = await axios.get(`${apiUrl}/tasks`);
    setTasks(res.data);
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
      <button onClick={addTask} disabled={!apiUrl}>
        Add
      </button>
    </div>
  );
}
