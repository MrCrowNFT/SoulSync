import mongoose from "mongoose";

const preferencesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // one preference document per user
    },
    preferences: {
      personality: {
        type: [String],
        default: [],
        validate: {
          validator: (v: string[]) =>
            v.every((item) => typeof item === "string"),
          message: "Personality must be an array of strings",
        },
      },
      family: {
        type: [String],
        default: [],
        validate: {
          validator: (v: string[]) =>
            v.every((item) => typeof item === "string"),
          message: "Family must be an array of strings",
        },
      },
      pets: {
        type: [String],
        default: [],
        validate: {
          validator: (v: string[]) =>
            v.every((item) => typeof item === "string"),
          message: "Pets must be an array of strings",
        },
      },
      hobbies: {
        type: [String],
        default: [],
        validate: {
          validator: (v: string[]) =>
            v.every((item) => typeof item === "string"),
          message: "Hobbies must be an array of strings",
        },
      },
      goals: {
        type: [String],
        default: [],
        validate: {
          validator: (v: string[]) =>
            v.every((item) => typeof item === "string"),
          message: "Goals must be an array of strings",
        },
      },
      likes: {
        type: [String],
        default: [],
        validate: {
          validator: (v: string[]) =>
            v.every((item) => typeof item === "string"),
          message: "Likes must be an array of strings",
        },
      },
      dislikes: {
        type: [String],
        default: [],
        validate: {
          validator: (v: string[]) =>
            v.every((item) => typeof item === "string"),
          message: "Dislikes must be an array of strings",
        },
      },
    },
  },
  { timestamps: true } //add createdAt and updatedAt fields
);

// add an index on userId, it should make faster queries, i think
preferencesSchema.index({ userId: 1 }, { unique: true });

const Preferences = mongoose.model("Preferences", preferencesSchema);
export default Preferences;
