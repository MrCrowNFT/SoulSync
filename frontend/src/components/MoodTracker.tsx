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
    <form className="flex justify-center">
      <div className="flex space-x-4">
        {moods.map((mood) => (
          <label
            key={mood.value}
            className="cursor-pointer text-4xl transition-transform duration-200"
          >
            <input
              type="radio"
              name="mood"
              value={mood.value}
              checked={selectedMood === mood.value}
              onChange={handleChange}
              className="hidden"
            />
            <span
              className={
                selectedMood === mood.value ? "scale-125" : "scale-100"
              }
            >
              {mood.emoji}
            </span>
          </label>
        ))}
      </div>
    </form>
  );
};

export default MoodTracker;
