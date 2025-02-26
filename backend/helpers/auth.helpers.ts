import jwt from "jsonwebtoken";
import { IUser } from "../types/user.types.ts";

// Constants for token expiration -> subject to change
const ACCESS_TOKEN_EXPIRY = "15m";
const REFRESH_TOKEN_EXPIRY = "7d";

//generate access and refresh tokens helper functions
export const generateTokens = (user: IUser) => {
  const accessToken = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET as string,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
  const refreshToken = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET as string,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  return { accessToken, refreshToken };
};
