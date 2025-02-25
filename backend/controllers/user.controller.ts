import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../module/user.model";

//Get user by id, probably for ai
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, username, gender, email, password, photo } =
      req.query;
    if (!name || !lastName || !username || !gender || !email || !password) {
      res.status(400).json({
        success: false,
        message:
          "Name, lastName, username, gender, email and password are required.",
      });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      res.status(400).json({
        success: false,
        message: "Username already in use",
      });
    }
    const newUser = new User({
      name,
      lastName,
      username,
      gender,
      email,
      password,
      photo,
    });
    await newUser.save();
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

//Create user

//update user

//delete user
