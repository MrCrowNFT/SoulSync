import mongoose from "mongoose";

const preferencesScheema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Reference to the user
  preferences: { //up for change 
    personality: [String],
    family: [String],
    pets: [String],
    hobbies: [String],
    goals: [String],
    likes: [String],
    dislikes: [String],
  },
});

const Preferences = mongoose.model("Preferences", preferencesScheema);
export default Preferences;
