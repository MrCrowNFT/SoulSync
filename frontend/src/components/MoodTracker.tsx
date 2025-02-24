import { useState } from "react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const moods = [
    { value: 1, emoji: "😢" },
    { value: 2, emoji: "😞" },
    { value: 3, emoji: "😐" },
    { value: 4, emoji: "😊" },
    { value: 5, emoji: "😁" },
  ];

  const handleChange = (moodValue: number) => {
    setSelectedMood(moodValue);
  };

  const handleSubmit = () => {
    if (selectedMood !== null) {
      setIsSubmitted(true);

      // Hide the tracker for 30 minutes (1800000 ms)
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedMood(null);
      }, 1800000);

      // You could also save the mood to localStorage, a database, etc.
      console.log(`Mood submitted: ${selectedMood}`);
    }
  };

  //maybe change this for a pop up
  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center w-full mt-5">
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-md w-[90%] max-w-md border border-[#6C9BCF] dark:border-gray-600 transition-colors duration-300 text-center">
          <p>Thanks for sharing how you feel! We'll check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full mt-5">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-md w-[90%] max-w-md border border-[#6C9BCF] dark:border-gray-600 transition-colors duration-300">
        <h2 className="text-xl font-semibold text-center mb-4">
          How are you feeling today?
        </h2>

        <div className="flex justify-center space-x-5 mb-4">
          {moods.map((mood) => (
            <label key={mood.value} className="cursor-pointer">
              <input
                type="radio"
                name="mood"
                value={mood.value}
                checked={selectedMood === mood.value}
                onChange={() => handleChange(mood.value)}
                className="hidden"
              />
              <span
                className={`inline-flex text-4xl transition-transform duration-200 ${
                  selectedMood === mood.value
                    ? "scale-125 text-blue-500 dark:text-blue-400"
                    : "hover:scale-110"
                }`}
              >
                {mood.emoji}
              </span>
            </label>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleSubmit}
            disabled={selectedMood === null}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              selectedMood === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
