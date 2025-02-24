import express from "express";

const chatAIRouter = express.Router();

// Fetch chat history for a user
chatAIRouter.get("/api/users/:userId/chat-history", );

// Send a message to the AI
chatAIRouter.post("/api/users/:userId/chat", );

// Delete chat history for a user
chatAIRouter.delete("/api/users/:userId/chat-history", );

export default chatAIRouter;
