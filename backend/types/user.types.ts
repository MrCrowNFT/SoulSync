import mongoose, { Document, Model } from "mongoose";

// interface for the User document, because apparently ts can not get the password compare method without this
export interface IUser extends Document {
  name: string;
  lastName: string;
  username: string;
  gender: "male" | "female" | "non-binary" | "other" | "prefer-not-to-say";
  birthDate: Date;
  email: string;
  password: string;
  photo: string;
  moodEntries: mongoose.Types.ObjectId[];
  chatHistory: mongoose.Types.ObjectId[];
  preferences: mongoose.Types.ObjectId;
  comparePassword(enteredPassword: string): Promise<boolean>;
}

// interface for the User model
export interface IUserModel extends Model<IUser> {}
