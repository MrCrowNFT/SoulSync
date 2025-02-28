import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
