import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const TaskForm = ({
  title,
  setTitle,
  onSubmit,
  loading = false,
}) => {
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Create a new task
      </h2>

      <input
        type="text"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />

      <motion.button
        whileTap={{ scale: 0.95 }}
        disabled={loading}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-linear-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition disabled:opacity-60"
      >
        <Plus size={18} />
        {loading ? "Creating..." : "Create Task"}
      </motion.button>
    </motion.form>
  );
};

export default TaskForm;
