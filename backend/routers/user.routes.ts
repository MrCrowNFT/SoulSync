import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller";
import { authenticate } from "../middleware/auth";

const userRouter = express.Router();

// Fetch all users, probably make this admin only, -> do i even need this
//userRouter.get("/");

// Fetch a specific user -> do i even need this?Yes, for getting info about the user for the ai
userRouter.get("/:userId", getUserById);

// Create a new user
userRouter.post("/signup", createUser);

// Update a user’s profile
userRouter.put("/:userId", authenticate, updateUser);

// Delete a user
userRouter.delete("/:userId", authenticate, deleteUser);

export default userRouter;
