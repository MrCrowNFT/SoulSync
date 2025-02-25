import mongoose from "mongoose";
import MoodEntry from "../module/moodEntry.model";
import { getMoodAverages } from "../helpers/mood.helpers";

// Get entries for specific queries (id, timestamp, etc)
export const getEntries = async (req, res) => {
  try {
    const { userId, type } = req.query;

    if (!userId || !type) {
      return res.status(400).json({ error: "userId and type are required" });
    }

    // validate userId before converting
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid userId format" });
    }

    const userIdObj = new mongoose.Types.ObjectId(userId as string);

    try {
      //getter functions handles valid types error
      const averages = await getMoodAverages(userIdObj, type as string);
      res.status(200).json(averages);
    } catch (avgError) {
      console.error("Error in getMoodAverages:", avgError);
      res
        .status(500)
        .json({
          error: "Failed to retrieve mood averages",
          details: avgError.message,
        });
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create new entry

// update entry

// delete entry
