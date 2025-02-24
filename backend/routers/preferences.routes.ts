import express from "express";

const preferencesRouter = express.Router();

// Fetch a user’s preferences
preferencesRouter.get("/:userId");

// Create or update a user’s preferences
preferencesRouter.post("/:userId");

// Delete a user’s preferences
preferencesRouter.delete("/:userId");

export default preferencesRouter;
