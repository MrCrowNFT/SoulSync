import express from "express";

const chatAIRouter = express.Router();

// Fetch chat history for a user
chatAIRouter.get("/:userId", );

// Send a message to the AI
chatAIRouter.post("/:userId", );

// Delete chat history for a user
chatAIRouter.delete("/:userId", );

//an update route is not really necesary, isn't it?

export default chatAIRouter;
