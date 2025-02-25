import mongoose from "mongoose";
import MoodEntry from "../module/moodEntry.model";

const getWeeklyAverages = async (userId: mongoose.Types.ObjectId) => {
  const weeklyAverages = await MoodEntry.aggregate([
    {
      $match: {
        userId: userId,
        createdAt: {
          $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        }, //Last 7 days, i think this should work, confusing af
      },
    },
    {
      $group: {
        _id: { $dayOfWeek: "$createdAt" }, //group by day of the week
        averageMood: { $avg: "$mood" },
      },
    },
    {
      $project: {
        _id: 0,
        day: "$_id",
        averageMood: 1,
      },
    },
    {
      $sort: { day: 1 }, // sort by day of the week
    },
  ]);

  return weeklyAverages;
};
