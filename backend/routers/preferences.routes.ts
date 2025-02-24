import express from "express";

const preferencesRouter = express.Router();

// Fetch a user’s preferences
preferencesRouter.get("/api/users/:userId/preferences", getPreferences);

// Create or update a user’s preferences
preferencesRouter.post("/api/users/:userId/preferences", updatePreferences);

// Delete a user’s preferences
preferencesRouter.delete("/api/users/:userId/preferences", deletePreferences);

export default preferencesRouter;
