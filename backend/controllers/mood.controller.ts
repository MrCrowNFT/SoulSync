import MoodEntry from "../module/moodEntry.model";

// Get entries for specific queries (id, timestamp, etc)
export const getEntries = async (req, res) => {
  try {
    const { userId, type } = req.query;
    
    if (!userId || !type) {
        return res.status(400).json({ error: "userId and type are required" });
      }



  } catch {}
};

// Create new entry

// update entry

// delete entry
