import express from "express";
import {
  deleteMoodEntry,
  getEntries,
  newEntry,
  updateEntry,
} from "../controllers/mood.controller";
import { authenticate } from "../middleware/auth";

const moodRouter = express.Router();

// Fetch all mood entries for a user for a specific query
moodRouter.get("/", authenticate, getEntries);

// Create a new mood entry
moodRouter.post("/", authenticate, newEntry);

// Update a mood entry
moodRouter.put("/", authenticate, updateEntry);

// Delete a mood entry
moodRouter.delete("/", authenticate, deleteMoodEntry);

export default moodRouter;
