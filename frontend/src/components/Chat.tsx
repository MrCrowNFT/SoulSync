import { useState } from "react";
import MoodTracker from "./MoodTracker";

const Chat = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setInput("");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center w-full max-w-2xl mx-auto bg-white rounded-xl">
    {/* Messages Container */}
    <div className="border border-[#6C9BCF] h-[500px] w-full overflow-y-auto bg-gray-50 rounded-xl p-4 mb-6 shadow-sm">
      <MoodTracker />
    </div>

    {/* Input Form */}
    <form onSubmit={handleSubmit} className="flex w-full items-center gap-3">
      {/* Clip Icon and Input Container */}
      <div className="flex items-center bg-white rounded-full border border-[#6C9BCF] px-4 py-2 flex-grow shadow-sm">
        <img src="" alt="clip-icon" className="w-6 h-6 cursor-pointer opacity-60 hover:opacity-100" />
        <input
          className="p-3 flex-grow rounded-full outline-none text-gray-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
      </div>

      {/* Send Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition-all shadow-md"
      >
        <img src="" alt="send-button" className="w-6 h-6" />
      </button>
    </form>
  </div>
  );
};

export default Chat;
