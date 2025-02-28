import React, { useState } from "react";
import axios from "axios";

const LoginModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loginRequest = async ({ username, password }) => {
    try {
      const res = await axios.post(
        "http://localhost:5500/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login response:", res.data); //->for debugging
      return res;
    } catch (error) {
      console.log("Full error:", error); // log full error object
      throw error;
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r dark:bg-gray-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl border dark:border-gray-800 border-gray-200 drop-shadow-lg transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-mono text-gray-900 dark:text-gray-100 mb-2">
            Welcome Back
          </h1>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-400 dark:border-red-600 p-4 mb-4 rounded-lg">
            <p className="text-red-700 dark:text-red-200 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                          placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                          placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                        text-sm font-semibold font-mono rounded-lg text-white bg-blue-600 hover:bg-blue-700 
                        dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 cursor-pointer"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginModal;
