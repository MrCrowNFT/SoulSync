import express from "express";

const moodRouter = express.Router();

//todo all this routes need auth

// Fetch all mood entries for a user for a specific query
moodRouter.get("/:userId/");

// Create a new mood entry
moodRouter.post("/:userId/");

// Update a mood entry
moodRouter.put("/:userId/:moodId");

// Delete a mood entry
moodRouter.delete("/:userId/:moodId");

export default moodRouter;
