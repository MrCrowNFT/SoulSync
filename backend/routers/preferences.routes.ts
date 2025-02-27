import express from "express";
import {
  createPreferences,
  deletePreferences,
  getPreferences,
  updatePreferences,
} from "../controllers/preferences.controller";

const preferencesRouter = express.Router();

// Create or update a user’s preferences
preferencesRouter.post("/:userId", createPreferences);

// Fetch a user’s preferences
preferencesRouter.get("/:userId", getPreferences);

//update user preferences
preferencesRouter.put("/:userId", updatePreferences);

// Delete a user’s preferences
preferencesRouter.delete("/:userId", deletePreferences);

export default preferencesRouter;
