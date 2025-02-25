import { Request, Response } from "express";
import mongoose from "mongoose";
import MoodEntry from "../module/moodEntry.model";
import { getMoodAverages } from "../helpers/mood.helpers";

//get entries for specific user by time required(type)
export const getEntries = async (req: Request, res: Response) => {
  try {
    const { userId, type } = req.query;

    if (!userId || !type) {
      return res
        .status(400)
        .json({ success: false, error: "userId and type are required" });
    }

    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid userId format" });
    }
    //getter functions handles valid types error
    const userIdObj = new mongoose.Types.ObjectId(userId as string);
    const averages = await getMoodAverages(userIdObj, type as string);

    res.status(200).json({ success: true, data: averages });
  } catch (error) {
    console.error("Error in getEntries:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

// Create new entry
export const newEntry = async (req: Request, res: Response) => {
  try {
    const { userId, mood } = req.query;

    if (!userId || !mood) {
      return res
        .status(400)
        .json({ success: false, error: "userId and mood are required" });
    }

    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid userId format" });
    }

    const moodValue = parseInt(mood as string, 10);
    if (isNaN(moodValue)) {
      return res
        .status(400)
        .json({ success: false, error: "Mood must be a number" });
    }

    if (moodValue < 1 || moodValue > 5) {
      return res
        .status(400)
        .json({ success: false, error: "Mood must be between 1 and 5" });
    }

    const newMoodEntry = new MoodEntry({
      userId: new mongoose.Types.ObjectId(userId as string),
      mood: moodValue,
    });

    await newMoodEntry.save();
    res.status(201).json({ success: true, data: newMoodEntry });
  } catch (error) {
    console.error("Error in newEntry:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

// update entry
export const updateEntry = async (req: Request, res: Response) => {
  try {
    const { moodId } = req.params;
    const { mood } = req.body;

    if (!moodId || !mood) {
      return res
        .status(400)
        .json({ success: false, error: "moodId and mood are required" });
    }

    const moodValue = parseInt(mood as string, 10);
    if (isNaN(moodValue)) {
      return res
        .status(400)
        .json({ success: false, error: "Mood must be a number" });
    }

    if (moodValue < 1 || moodValue > 5) {
      return res
        .status(400)
        .json({ success: false, error: "Mood must be between 1 and 5" });
    }

    const updatedMoodEntry = await MoodEntry.findByIdAndUpdate(
      moodId,
      { mood: moodValue },
      { new: true }
    );

    if (!updatedMoodEntry) {
      return res
        .status(404)
        .json({ success: false, error: "Mood entry not found" });
    }

    res.status(200).json({ success: true, data: updatedMoodEntry });
  } catch (error) {
    console.error("Error in updateEntry:", error);
    res
      .status(500)
      .json({
        success: false,
        error: "Internal server error",
        details: error.message,
      });
  }
};

// delete entry
export const deleteMoodEntry = async (req: Request, res: Response) => {
  try {
    const { userId, moodId } = req.query;

    const deletedMoodEntry = await MoodEntry.findByIdAndDelete(moodId);
    if (!deletedMoodEntry) {
      return res.status(404).json({
        success: false,
        message: "Mood entry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Mood entry deleted successfully",
    });
  } catch (error) {
    console.error(`Error deleting Mood Entry: ${error.message}`);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};
