import express from "express";

const preferencesRouter = express.Router();

// Fetch a user’s preferences
preferencesRouter.get("/api/users/:userId/preferences");

// Create or update a user’s preferences
preferencesRouter.post("/api/users/:userId/preferences");

// Delete a user’s preferences
preferencesRouter.delete("/api/users/:userId/preferences");

export default preferencesRouter;
