import React, { useState } from "react";

const SignupModal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex items-center justify-center bg-gradient-to-r dark:bg-gray-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 z-0">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl border dark:border-gray-800 border-gray-200 drop-shadow-lg transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-mono text-gray-900 dark:text-gray-100 mb-2">
            Create Account
          </h1>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-400 dark:border-red-600 p-4 mb-4 rounded-lg">
            <p className="text-red-700 dark:text-red-200 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300 mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                            placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300 mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                            placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                          placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={formData.username}
              onChange={handleChange}
              className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                          placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300 mb-1"
            >
              Birth Date
            </label>
            <input
              id="birthDate"
              name="birthDate"
              type="date"
              required
              value={formData.birthDate}
              onChange={handleChange}
              className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                          placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300 mb-1"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                          text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
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
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                          placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="appearance-none relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                          placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none 
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 transition-colors duration-300"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                          text-sm font-semibold font-mono rounded-lg text-white bg-blue-600 hover:bg-blue-700 
                          dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 cursor-pointer"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
