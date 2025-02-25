import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../module/user.model";

//Get user by id, probably for ai
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      res.status(400).json({ success: false, error: "userId required" });
    }

    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      res.status(400).json({ success: false, error: "Invalid userId format" });
    }

    const user = await User.findById(userId).select("-password"); //exclude the password from the result
    if (!user) {
      res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error("Error gettin user:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

//Create user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, username, gender, email, password, photo } =
      req.body;

    // required fields
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

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({
        success: false,
        message: "Email already in use",
      });
    }

    // Create new user
    const newUser = new User({
      name,
      lastName,
      username,
      gender,
      email,
      password, // this will be hashed by the pre-save hook
      photo,
    });

    await newUser.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        _id: newUser._id,
        name: newUser.name,
        lastName: newUser.lastName,
        username: newUser.username,
        gender: newUser.gender,
        email: newUser.email,
        photo: newUser.photo,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

//update user

//delete user
