import MoodEntry from "../module/moodEntry.model";

// Get entries for specific queries (id, timestamp, etc)
export const getEntries = async (req, res) => {
  try {
    const { id } = req.params;
    const { timestamp, limit } = req.query;

    const query = {};


  } catch {}
};

// Create new entry

// update entry

// delete entry
