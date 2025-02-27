import mongoose from "mongoose";
import { Request, Response } from "express";
import ChatEntry from "../module/chatEntry.model";

export const getChatEntries = async (req: Request, res: Response) => {
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

    const chatEntries = await ChatEntry.aggregate([
      {
        $match: { userId: userIdObj },
      },
    ]);

    if (!chatEntries || chatEntries.length === 0) {
      res.status(404).json({
        success: false,
        error: "No chat entry found for this user",
      });
      return;
    }
    //probably will have to limit this in some way, other wise it'll be huge
    res.status(200).json({
      success: true,
      data: chatEntries,
    });
  } catch (error) {
    console.error("Error retrieving chat entries:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

export const newChatEntry = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { message, sender, metadata } = req.body;

    if (!userId) {
      res.status(400).json({ success: false, error: "userId is required" });
      return;
    }
    if (!message || !sender) {
      res
        .status(400)
        .json({ success: false, error: "Message and sender are required" });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(userId as string)) {
      res.status(400).json({ success: false, error: "Invalid userId format" });
      return;
    }

    //validate sender
    if (sender !== 'user' && sender !== 'ai') {
        return res.status(400).json({ 
          success: false, 
          error: "Sender must be either 'user' or 'ai'" 
        });
      }

    const newChatEntry = new ChatEntry({
      userId: new mongoose.Types.ObjectId(userId as string),
      message: message,
      sender: sender,
      metadata: metadata || {},
    });

    await newChatEntry.save();
    res.status(201).json({ success: true, data: newChatEntry });
  } catch (error) {
    console.error("Error saving chat entry:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

//delete all entries for userId -> should only happen when user desire or when account is deleted
export const deleteChatEntries = async (req: Request, res: Response) => {
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

    const deletedChatEntries = await ChatEntry.deleteMany({
      userId: userId,
    });

    res.status(200).json({ success: true, data: deletedChatEntries });
  } catch (error) {
    console.error("Error deleting chat entries:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};
