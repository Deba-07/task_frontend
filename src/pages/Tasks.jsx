import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/taskApi";
import TaskCard from "../components/TaskCard";
import Navbar from "../components/Navbar";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="bg-linear-to-br from-indigo-100 via-purple-100 to-blue-100 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 pt-6 space-y-4">
          {tasks.length === 0 && (
            <p className="text-center text-gray-500">No tasks yet</p>
          )}

          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
