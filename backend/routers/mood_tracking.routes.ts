import express from "express";
import { getEntries } from "../controllers/mood.controller";

const moodRouter = express.Router();

//todo all this routes need auth

// Fetch all mood entries for a user for a specific query
moodRouter.get("/", getEntries);

// Create a new mood entry
moodRouter.post("/");

// Update a mood entry
moodRouter.put("/");

// Delete a mood entry
moodRouter.delete("/");

export default moodRouter;
