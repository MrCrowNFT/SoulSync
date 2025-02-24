import express from "express";

const authRouter = express.Router();

// User sign-up
authRouter.post("/api/auth/signup", );

// User login
authRouter.post("/api/auth/login", );

// User logout
authRouter.post("/api/auth/logout", );

// Refresh access token
authRouter.post("/api/auth/refresh-token", );

export default authRouter;