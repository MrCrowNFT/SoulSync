import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative flex items-center w-16 h-8 rounded-full p-1 bg-gray-300 dark:bg-gray-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
    >
      {/* Sun Icon */}
      <span className="absolute left-1 text-yellow-500 text-xl dark:hidden transition-opacity duration-300">
        🌞
      </span>
      {/* Moon Icon */}
      <span className="absolute right-1 text-gray-200 text-xl hidden dark:inline transition-opacity duration-300">
        🌙
      </span>

      {/* Toggle Circle */}
      <span
        className={`w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-sm transition-all duration-300 ease-in-out transform ${
          darkMode ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </button>
  );
};
export default DarkModeToggle;
