import express from "express";

const authRouter = express.Router();

// User sign-up
authRouter.post("/signup", );

// User login
authRouter.post("/login", );

// User logout
authRouter.post("/logout", );

// Refresh access token
authRouter.post("/refresh-token", );

export default authRouter;