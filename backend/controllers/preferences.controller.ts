import { Request, Response } from "express";
import mongoose from "mongoose";
import Preferences from "../module/preferences.model.ts";
import { toStringArray } from "../helpers/preferences.helpers.ts";

export const createPreferences = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { personality, family, pets, hobbies, goals, likes, dislikes } =
      req.query;

    if (!userId) {
      res.status(400).json({ success: false, error: "userId is required" });
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

    // Process each field -> the toStringArray will handle the input array (or empty)
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

export const getPreferences = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({ success: false, error: "userId is required" });
      return;
    }
    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      res.status(400).json({ success: false, error: "Invalid userId format" });
      return;
    }
    const userIdObj = new mongoose.Types.ObjectId(userId as string);
    const preferences = await Preferences.aggregate([
      {
        $match: { userId: userIdObj },
      },
    ]);

    if (!preferences || preferences.length === 0) {
      res.status(404).json({
        success: false,
        error: "No preferences found for this user",
      });
      return;
    }

    //return first result since userId should be unique
    res.status(200).json({
      success: true,
      data: preferences[0],
    });
  } catch (error) {
    console.error("Error in getting preferences:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

export const updatePreferences = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { personality, family, pets, hobbies, goals, likes, dislikes } =
      req.query;

    if (!userId) {
      res.status(400).json({ success: false, error: "userId is required" });
      return;
    }
    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      res.status(400).json({ success: false, error: "Invalid userId format" });
      return;
    }
    //update operations for MongoDB
    const updateOperations: Record<string, any> = {};

    //$addToSet operator with $each modifier to add new unique values to the arrays without duplicating existing values.
    // need to add only fields that are present in the request
    if (personality !== undefined) {
      const values = toStringArray(personality);
      if (values.length > 0) {
        updateOperations.$addToSet = updateOperations.$addToSet || {};
        updateOperations.$addToSet.personality = { $each: values };
      }
    }

    if (family !== undefined) {
      const values = toStringArray(family);
      if (values.length > 0) {
        updateOperations.$addToSet = updateOperations.$addToSet || {};
        updateOperations.$addToSet.family = { $each: values };
      }
    }

    if (pets !== undefined) {
      const values = toStringArray(pets);
      if (values.length > 0) {
        updateOperations.$addToSet = updateOperations.$addToSet || {};
        updateOperations.$addToSet.pets = { $each: values };
      }
    }

    if (hobbies !== undefined) {
      const values = toStringArray(hobbies);
      if (values.length > 0) {
        updateOperations.$addToSet = updateOperations.$addToSet || {};
        updateOperations.$addToSet.hobbies = { $each: values };
      }
    }

    if (goals !== undefined) {
      const values = toStringArray(goals);
      if (values.length > 0) {
        updateOperations.$addToSet = updateOperations.$addToSet || {};
        updateOperations.$addToSet.goals = { $each: values };
      }
    }

    if (likes !== undefined) {
      const values = toStringArray(likes);
      if (values.length > 0) {
        updateOperations.$addToSet = updateOperations.$addToSet || {};
        updateOperations.$addToSet.likes = { $each: values };
      }
    }

    if (dislikes !== undefined) {
      const values = toStringArray(dislikes);
      if (values.length > 0) {
        updateOperations.$addToSet = updateOperations.$addToSet || {};
        updateOperations.$addToSet.dislikes = { $each: values };
      }
    }

    // if no fields provided
    if (!updateOperations.$addToSet) {
      return res.status(400).json({
        success: false,
        error: "No valid fields provided for update",
      });
    }

    //update
    const updatedPreferences = await Preferences.findOneAndUpdate(
      { userId: userId },
      updateOperations,
      { new: true, runValidators: true, upsert: true } //upsert: true option so that if preferences don't exist for a user yet, they'll be created
    );

    res.status(201).json({ success: true, data: updatedPreferences });
  } catch (error) {
    console.error("Error in updating preferences:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};


