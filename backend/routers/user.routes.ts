import express from "express";
import { createUser } from "../controllers/user.controller";

const userRouter = express.Router();

// Fetch all users, probably make this admin only, -> do i even need this
userRouter.get("/");

// Fetch a specific user -> do i even need this?Yes, for getting info about the user for the ai
userRouter.get("/:userId");

// Create a new user
userRouter.post("/", createUser);

// Update a user’s profile
userRouter.put("/:userId");

// Delete a user
userRouter.delete("/:userId");

export default userRouter;
