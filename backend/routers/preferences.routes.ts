import express from "express";

const preferencesRouter = express.Router();

// Create or update a user’s preferences
preferencesRouter.post("/:userId");

//update user preferences
preferencesRouter.put("/:userId");

// Fetch a user’s preferences
preferencesRouter.get("/:userId");

// Delete a user’s preferences
preferencesRouter.delete("/:userId");

export default preferencesRouter;
