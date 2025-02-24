import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userScheema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { String, required: true },
  lastName: { String, required: true },
  username: { String, required: true },
  gender: { String, required: true },
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

//hash the password before storing it in the database, pre middleware hook runs before saving
userScheema.pre("save", async function (next) {
  try {
    // only hash the password if is new/modified
    if (!this.isModified("password")) return next();
    this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
  } catch (error) {
    next(error);
  }
});

//compare entered password with the hashed password
userScheema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.passwordHash);
};

const User = mongoose.model("User", userScheema);

export default User;
