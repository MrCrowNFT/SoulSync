import express from "express";
import {
  deleteChatEntries,
  getChatEntries,
  newChatEntry,
} from "../controllers/chat.controller";

const chatAIRouter = express.Router();

// Fetch chat history for a user
chatAIRouter.get("/:userId", getChatEntries);

// Send a message to the AI
chatAIRouter.post("/:userId", newChatEntry);

// Delete chat history for a user
chatAIRouter.delete("/:userId", deleteChatEntries);

//an update route is not really necesary, isn't it?

export default chatAIRouter;
