import User from "../module/user.model.ts";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { IUser } from "../types/user.types.ts";
import RefreshToken from "../module/refreshToken.model.ts";

// Constants for token expiration -> subject to change
const ACCESS_TOKEN_EXPIRY = "15m";
const REFRESH_TOKEN_EXPIRY = "7d";

//generate access and refresh tokens helper functions
const generateTokens = (user: IUser) => {
  const accessToken = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET as string,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
  const refreshToken = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET as string,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  return { accessToken, refreshToken };
};

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

    const { accessToken, refreshToken } = generateTokens(user);

    //store the refresh token on db
    const createdToken = await RefreshToken.create({
      token: refreshToken,
      user: user._id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //* 7 days -> If changing the REFRESH_TOKEN_EXPIRY don't forget to also change this
    });
    if (!createdToken) {
      res.status(400).json({
        success: false,
        message: "Failed to save refresh token on database",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(`Error during login: ${error.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res
        .status(400)
        .json({ success: false, message: "Refresh token is required" });
      return;
    }

    const deletedToken = await RefreshToken.deleteOne({ token: refreshToken });

    if (!deletedToken) {
      res.status(400).json({
        success: false,
        message: "Refresh token could not be deleted",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error(`Error during logout: ${error.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
