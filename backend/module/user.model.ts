import mongoose, { Model, Document } from "mongoose";
import bcrypt from "bcrypt";
import { IUser, IUserModel } from "../types/user.types.ts";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "non-binary", "other", "prefer-not-to-say"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // email validation
    },
    password: { type: String, required: true, select: false }, // Hide by default to prevent exposing it, though it doesn't really matter because is encrypted,but whatever
    photo: { type: String, default: "" },
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
  },
  { timestamps: true }
);

//hash the password before storing it in the database, pre middleware hook runs before saving
userSchema.pre("save", async function (next) {
  try {
    // only hash the password if is new/modified
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    next(error as Error);
  }
});

//compare entered password with the hashed password
userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<IUser, IUserModel>("User", userSchema);

export default User;
