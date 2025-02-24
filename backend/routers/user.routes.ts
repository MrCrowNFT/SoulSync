import express from "express";

const userRouter = express.Router();

// Fetch all users, probably make this admin only
userRouter.get("/users", );

// Fetch a specific user
userRouter.get("/users/:userId", );

// Create a new user
userRouter.post("/users", );

// Update a user’s profile
userRouter.put("/users/:userId", );

// Delete a user
userRouter.delete("/users/:userId", );

export default userRouter;