import express from "express";

const moodRouter = express.Router();

// Fetch all mood entries for a user probably
moodRouter.get("/:userId/");

// Fetch a specific mood entry, should query this to get specific entries for dashboard
moodRouter.get("/:userId/:moodId");

// Create a new mood entry
moodRouter.post("/:userId/");

// Update a mood entry
moodRouter.put("/:userId/:moodId");

// Delete a mood entry
moodRouter.delete("/:userId/:moodId");

export default moodRouter;
