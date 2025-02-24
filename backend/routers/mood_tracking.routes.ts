import express from "express";

const moodRouter = express.Router();

// Fetch all mood entries for a user probably 
moodRouter.get("/api/users/:userId/mood-entries", );

// Fetch a specific mood entry, should query this to get specific entries for dashboard
moodRouter.get("/api/users/:userId/mood-entries/:moodId", );

// Create a new mood entry
moodRouter.post("/api/users/:userId/mood-entries", );

// Update a mood entry
moodRouter.put("/api/users/:userId/mood-entries/:moodId", );

// Delete a mood entry
moodRouter.delete("/api/users/:userId/mood-entries/:moodId", );

export default moodRouter;