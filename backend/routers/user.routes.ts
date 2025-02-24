import express from "express";

const userRouter = express.Router();

// Fetch all users, probably make this admin only
userRouter.get("/");

// Fetch a specific user
userRouter.get("/:userId");

// Create a new user
userRouter.post("/");

// Update a user’s profile
userRouter.put("/:userId");

// Delete a user
userRouter.delete("/:userId");

export default userRouter;
