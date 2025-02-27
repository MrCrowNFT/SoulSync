import mongoose from "mongoose";
import { Request, Response } from "express";
import ChatEntry from "../module/chatEntry.model";

export const getChatEntries = async (req: Request, res: Response) => {};

export const newChatHistory = async (req: Request, res: Response) => {};

//delete all entries for userId -> should only happen when user desire or when account is deleted
export const deleteUserChatEntries = async (req: Request, res: Response) => {};
