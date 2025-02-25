import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../module/user.model";

//Get user by id, probably for ai
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      res.status(400).json({ success: false, error: "userId required" });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      res.status(400).json({ success: false, error: "Invalid userId format" });
      return;
    }

    const user = await User.findById(userId).select("-password"); //exclude the password from the result
    if (!user) {
      res.status(404).json({ success: false, error: "User not found" });
      return;
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error("Error getting user:", error);
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
      return;
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      res.status(400).json({
        success: false,
        message: "Username already in use",
      });
      return;
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({
        success: false,
        message: "Email already in use",
      });
      return;
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
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { name, lastName, username, gender, email, photo } = req.body;

    if (!userId) {
      res.status(400).json({ success: false, message: "User ID is required." });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res
        .status(400)
        .json({ success: false, message: "Invalid user ID format." });
      return;
    }

    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found." });
      return;
    }

    // check username or email already exists but excluding the current user
    if (username && username !== user.username) {
      const existingUsername = await User.findOne({ username });
      if (existingUsername) {
        res
          .status(400)
          .json({ success: false, message: "Username already in use." });
        return;
      }
    }

    if (email && email !== user.email) {
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        res
          .status(400)
          .json({ success: false, message: "Email already in use." });
        return;
      }
    }

    // Update only provided fields
    if (name) user.name = name;
    if (lastName) user.lastName = lastName;
    if (username) user.username = username;
    if (gender) user.gender = gender;
    if (email) user.email = email;
    if (photo) user.photo = photo;

    await user.save();

    res.status(200).json({
      success: true,
      message: "User updated successfully.",
      data: {
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        username: user.username,
        gender: user.gender,
        email: user.email,
        photo: user.photo,
      },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

//delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({ success: false, message: "User ID is required." });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res
        .status(400)
        .json({ success: false, message: "Invalid user ID format." });
      return;
    }

    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found." });
      return;
    }

    await User.findByIdAndDelete(userId);

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};
