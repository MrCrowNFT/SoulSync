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

  if (isSubmitted) {
    return (
      <div className="p-4 rounded-lg text-center">
        <p>Thanks for sharing how you feel! We'll check back later.</p>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg">
      <div className="text-center">
        <h2 className="text-xl mb-4">How are you feeling today?</h2>

        <div className="flex justify-center gap-3 mb-4">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => handleChange(mood.value)}
              className={`text-3xl p-2 rounded-full ${
                selectedMood === mood.value
                  ? "bg-gray-100 scale-110 transform transition-transform"
                  : "hover:bg-gray-50"
              }`}
            >
              {mood.emoji}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={selectedMood === null}
          className={`px-4 py-2 rounded ${
            selectedMood === null
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MoodTracker;
