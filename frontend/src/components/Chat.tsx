import { useState } from "react";

const Chat = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setInput("");
    }
  };

  return (
    <div className="p-4 flex flex-col items-center max-w-md mx-auto bg-[#F5F5F5] rounded-lg shadow-md">
      {/* Messages Container */}
      <div className="border border-[#6C9BCF] h-96 w-full overflow-y-auto bg-white rounded-lg p-2 mb-4"></div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
        {/* Clip Icon and Input Container */}
        <div className="flex items-center bg-white rounded-full border border-[#6C9BCF] p-1 flex-grow">
          <img src="" alt="clip-icon" className="w-6 h-6 ml-2" />
          <input
            className="p-2 flex-grow rounded-full outline-none ml-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
        >
          <img src="" alt="send-button" className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default Chat;
