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

  //TODO: Ones the user submit it's mood, i should desapear for maybe like 30 minutes
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md w-[90%] max-w-md border border-[#6C9BCF]">
        <h2 className="text-xl font-semibold text-center mb-4">
          How are you feeling today?
        </h2>
        <form className="flex justify-center space-x-5">
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
                  selectedMood === mood.value
                    ? "scale-125 text-blue-500"
                    : "hover:scale-110"
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
