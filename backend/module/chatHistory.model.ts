import mongoose from "mongoose";

const chatHistoryScheema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Reference to the user
    message: { String, required: true },
    sender: { String, required: true }, // user or ai
    metadata: {
      context: String, // Context of the conversation, not sure how to add this, but might be useful
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

const ChatHistory = mongoose.model("ChatHistory", chatHistoryScheema);

export default ChatHistory;
