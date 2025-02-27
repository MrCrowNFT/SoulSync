import express from "express";

const preferencesRouter = express.Router();

// Create or update a user’s preferences
preferencesRouter.post("/:userId");

// Fetch a user’s preferences
preferencesRouter.get("/:userId");

//update user preferences
preferencesRouter.put("/:userId");

// Delete a user’s preferences
preferencesRouter.delete("/:userId");

export default preferencesRouter;
