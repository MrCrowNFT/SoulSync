import express from "express";
import { deleteMoodEntry, getEntries, newEntry, updateEntry } from "../controllers/mood.controller";

const moodRouter = express.Router();

// Fetch all mood entries for a user for a specific query
moodRouter.get("/", getEntries);

// Create a new mood entry
moodRouter.post("/", newEntry);

// Update a mood entry
moodRouter.put("/", updateEntry);

// Delete a mood entry
moodRouter.delete("/", deleteMoodEntry);

export default moodRouter;
