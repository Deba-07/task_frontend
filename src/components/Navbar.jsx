import { Plus, List } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-linear-to-br from-indigo-100 via-purple-100 to-blue-100 bg-transparent backdrop-blur-md">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        TaskFlow
      </Link>

      <div className="flex gap-3">
        <Link
          to="/create"
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          <Plus size={18} /> Create Task
        </Link>

        <Link
          to="/tasks"
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/80 shadow hover:bg-gray-100 transition"
        >
          <List size={18} /> See Tasks
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
