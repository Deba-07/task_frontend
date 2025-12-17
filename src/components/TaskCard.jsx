import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const TaskCard = ({ task, onDelete }) => {
  return (
    <motion.div
      layout
      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex justify-between items-center"
    >
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-500">
          {new Date(task.createdAt).toLocaleString()}
        </p>
      </div>

      <button
        onClick={() => onDelete(task._id)}
        className="text-red-500 hover:text-red-600"
      >
        <Trash2 />
      </button>
    </motion.div>
  );
};

export default TaskCard;
