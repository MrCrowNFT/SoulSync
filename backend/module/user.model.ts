import mongoose from "mongoose";

const userScheema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { String, required: true },
  email: { String, required: true },
  passwordHash: { String, required: true },
  photo: String,
  moodEntries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MoodEntry",
    },
  ],
  chatHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatHistory",
    },
  ],
  preferences: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Preferences",
  },
});

const User = mongoose.model("User", userScheema);

export default User;
