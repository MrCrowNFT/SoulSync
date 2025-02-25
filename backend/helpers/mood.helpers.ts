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

const getMonthlyAverages = async (userId: mongoose.Types.ObjectId) => {
  const monthlyAverages = await MoodEntry.aggregate([
    {
      $match: {
        userId: userId,
        createdAt: {
          $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)), //again confusing, but should give 30 days
        },
      },
    },
    {
      $group: {
        _id: { $dayOfMonth: "$createdAt" }, // group by day of the month
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
      $sort: { day: 1 }, // Sort by day of the month
    },
  ]);
  return monthlyAverages;
};

const getYearlyAverages = async (userId: mongoose.Types.ObjectId) => {
  const yearlyAverages = await MoodEntry.aggregate([
    {
      $match: {
        userId: userId,
        createdAt: {
          $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        }, // Last 12 months
      },
    },
    {
      $group: {
        _id: { $month: "$createdAt" }, // group by month
        averageMood: { $avg: "$mood" },
      },
    },
    {
      $project: {
        _id: 0,
        month: "$_id",
        averageMood: 1,
      },
    },
    {
      $sort: { month: 1 }, // sort by month
    },
  ]);

  return yearlyAverages;
};
