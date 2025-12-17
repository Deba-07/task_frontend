import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../api/taskApi";
import Loader from "../components/Loader";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setLoading(true);
      await createTask(title);
      setSuccess("Task created successfully!");
      setTimeout(() => navigate("/tasks"), 1200);
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-indigo-100 via-purple-100 to-blue-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Create Task</h2>

        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className="w-full bg-indigo-500 text-white py-2 rounded flex justify-center"
        >
          {loading ? <Loader /> : "Submit"}
        </button>

        {success && (
          <p className="text-green-600 mt-3 text-center">{success}</p>
        )}
      </form>
    </div>
  );
};

export default CreateTask;
