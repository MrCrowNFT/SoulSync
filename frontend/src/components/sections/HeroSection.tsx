import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-screen flex bg-cover bg-center justify-start items-center bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="font-mono space-y-4 p-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-bold text-gray-900 dark:text-gray-100"
        >
          AI Mental Health Coach
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-gray-700 dark:text-gray-300"
        >
          Personalized mental health support using AI chatbots, mood tracking,
          and therapy recommendations
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 rounded-md bg-[hsl(212,51%,62%)] dark:bg-[hsl(212,51%,40%)] shadow-md hover:bg-[hsl(212,51%,40%)] dark:hover:bg-[hsl(212,51%,30%)] transition duration-300"
        >
          <Link to={"/signup"} className="text-white">
            Sign Up
          </Link>
        </motion.button>
      </div>
    </div>
  );
};
export default HeroSection;
