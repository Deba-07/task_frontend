import { motion } from "framer-motion";
import Lottie from "lottie-react";
import taskAnimation from "../assets/task.json";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-indigo-100 via-purple-100 to-blue-100 px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl w-full">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Organize your
            <span className="text-indigo-600"> tasks</span>
            <br /> effortlessly
          </h2>

          <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
            Stay focused, plan smarter, and turn your daily to-dos into
            meaningful progress with a clean and intuitive task management
            experience.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/create" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Create Task
            </Link>
            <Link to="/tasks" className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition">
              See Tasks
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mx-auto"
        >
          <Lottie animationData={taskAnimation} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
