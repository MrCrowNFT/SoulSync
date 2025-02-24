import mongoose from "mongoose";

const moodEntryScheema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,// Reference to the user
      ref: "User",
    },
    mood: Number, // scale for mood from 1-5 (very_sad=1, very_happy=5)
    // this is just a prototype, need further investigation for improvment
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

const MoodEntry = mongoose.model("MoodEntry", moodEntryScheema);

export default MoodEntry;
