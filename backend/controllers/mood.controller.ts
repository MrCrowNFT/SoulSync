import mongoose from "mongoose";
import MoodEntry from "../module/moodEntry.model";
import { getMoodAverages } from "../helpers/mood.helpers";
import { Request, Response } from "express";

// Get entries for specific queries (id, timestamp, etc)
export const getEntries = async (req: Request, res: Response) => {
  try {
    const { userId, type } = req.query;

    if (!userId || !type) {
      return res.status(400).json({ error: "userId and type are required" });
    }

    // validate userId before converting
    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      return res.status(400).json({ error: "Invalid userId format" });
    }

    const userIdObj = new mongoose.Types.ObjectId(userId as string);

    try {
      //getter functions handles valid types error
      const averages = await getMoodAverages(userIdObj, type as string);
      res.status(200).json({ success: true, data: averages });
    } catch (avgError) {
      console.error("Error in getMoodAverages:", avgError);
      res.status(500).json({
        error: "Failed to retrieve mood averages",
        details: avgError.message,
      });
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ success: false, error: "Internal server error", details: error.message });

  }
};

// Create new entry
export const newEntry = async (req: Request, res: Response) => {
  try {
    const { userId, mood } = req.query;
    if (!userId || !mood) {
      return res.status(400).json({ error: "userId and mood are required" });
    }
    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      return res.status(400).json({ error: "Invalid userId format" });
    }

    const userIdObj = new mongoose.Types.ObjectId(userId as string);

    const newMoodEntry = new MoodEntry();
    await newMoodEntry.save();
    return res.status(200).json({ success: true, data: newMoodEntry });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ success: false, error: "Internal server error", details: error.message });

  }
};
// update entry
export const updateEntry = async (req: Request, res: Response) => {
  try {
    const { userId, moodId, mood } = req.query;

    const updatedMoodEntry = await MoodEntry.findByIdAndUpdate(moodId, mood, {
      new: true,
    });

    if (!updatedMoodEntry) {
      return res.status(404).json({
        success: false,
        message: "Mood entry not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedMoodEntry,
    });
  } catch (error) {
    console.error(`Error updating Mood Entry: ${error.message}`);
    res.status(500).json({ success: false, error: "Internal server error", details: error.message });

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
    res.status(500).json({ success: false, error: "Internal server error", details: error.message });

  }
};
