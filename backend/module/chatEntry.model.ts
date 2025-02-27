import mongoose from "mongoose";

const chatEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Reference to the user
    message: { type: String, required: true },
    sender: {
      type: String,
      required: true,
      enum: ["user", "ai"],
    },
    metadata: {
      context: {
        type: String,
        default: "", // Default empty string
      }, // Context of the conversation, not sure how to add this, but might be useful
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

// add an index on userId for faster queries
chatEntrySchema.index({ userId: 1 });

const ChatEntry = mongoose.model("ChatHistory", chatEntrySchema);

export default ChatEntry;
