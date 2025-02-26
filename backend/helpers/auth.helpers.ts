import jwt from "jsonwebtoken";
import { IUser } from "../types/user.types.ts";

// Constants for token expiration -> subject to change
const ACCESS_TOKEN_EXPIRY = "15m";
const REFRESH_TOKEN_EXPIRY = "7d";

// Generate just an access token
export const generateAccessToken = (user: IUser) => {
  return jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_ACCESS_SECRET as string,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
};

// Generate just a refresh token
export const generateRefreshToken = (user: IUser) => {
  return jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_REFRESH_SECRET as string,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );
};

// Generate both tokens
export const generateTokens = (user: IUser) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return { accessToken, refreshToken };
};
