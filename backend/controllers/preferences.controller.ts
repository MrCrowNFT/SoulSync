import { Request, Response } from "express";
import mongoose from "mongoose";
import Preferences from "../module/preferences.model.ts";

export const createPreferences = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { personality, family, pets, hobbies, goals, likes, dislikes } =
      req.query;

    if (!userId) {
      res
        .status(400)
        .json({ success: false, error: "userId and type are required" });
      return;
    }
    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      res.status(400).json({ success: false, error: "Invalid userId format" });
      return;
    }
    // New preferences object with only the userId initially
    const preferencesData: any = {
      userId,
    };

    // Helper function to process array fields
    const toStringArray = (input: any): string[] => {
      if (!input) return []; //handle empty fields

      // Handle array input
      if (Array.isArray(input)) {
        return input
          .map((item) => String(item).trim())
          .filter((item) => item !== "");
      }

      // Handle single value
      const str = String(input).trim();
      return str ? [str] : [];
    };

    // Process each field
    preferencesData.personality = toStringArray(personality);
    preferencesData.family = toStringArray(family);
    preferencesData.pets = toStringArray(pets);
    preferencesData.hobbies = toStringArray(hobbies);
    preferencesData.goals = toStringArray(goals);
    preferencesData.likes = toStringArray(likes);
    preferencesData.dislikes = toStringArray(dislikes);

    const newPreferences = new Preferences(preferencesData);

    await newPreferences.save();
    res.status(201).json({ success: true, data: newPreferences });
  } catch (error) {
    console.error("Error in creating preferences:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};
