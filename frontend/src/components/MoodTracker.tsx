import React, { useState } from "react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState("");

  const moods = [
    { value: "very_sad", emoji: "😢" },
    { value: "sad", emoji: "😞" },
    { value: "neutral", emoji: "😐" },
    { value: "happy", emoji: "😊" },
    { value: "very_happy", emoji: "😁" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMood(e.target.value);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#6C9BCF] text-[#333333] p-5 rounded-lg shadow-lg w-[90%] max-w-md mt-5">
        <h2 className="text-lg font-semibold font-mono text-center">How are you feeling today?</h2>
        <form className="flex justify-center space-x-4 mt-3">
          {moods.map((mood) => (
            <label key={mood.value} className="cursor-pointer">
              <input
                type="radio"
                name="mood"
                value={mood.value}
                checked={selectedMood === mood.value}
                onChange={handleChange}
                className="hidden"
              />
              <span
                className={`inline-flex text-4xl transition-transform duration-200 ${
                  selectedMood === mood.value ? "scale-125" : "hover:scale-110"
                }`}
              >
                {mood.emoji}
              </span>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};

export default MoodTracker;
