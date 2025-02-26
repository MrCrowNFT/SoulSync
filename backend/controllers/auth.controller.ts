import User from "../module/user.model.ts";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import {IUser} from "../types/user.types.ts"


export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select("+password"); //explicitly select password for comparison
    if (!user) {
      res.status(401).json({ success: false, message: "Invalid username" });
      return;
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(401).json({ success: false, message: "Invalid password" });
      return;
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(`Error during login: ${error.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error(`Error during logout: ${error.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
