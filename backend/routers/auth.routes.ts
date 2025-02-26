import express from "express";
import { login, logout } from "../controllers/auth.controller";

const authRouter = express.Router();

// User login
authRouter.post("/login", login);

//refresh access token 
authRouter.post("/refresh-token", )

// User logout
authRouter.post("/logout", logout);

export default authRouter;