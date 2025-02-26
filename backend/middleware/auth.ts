import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res
      .status(401)
      .json({ success: false, message: "Unauthorized - No token provided" });
  }

  const token = authHeader?.split(" ")[1];
  try {
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_ACCESS_SECRET as string
    );
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - Invalid token" });
  }
};
