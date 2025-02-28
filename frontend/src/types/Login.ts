import axios from "axios";
import { LoginParams, LoginResponse } from "../api/auth.ts";

export const loginRequest = async ({ username, password }: LoginParams) => {
  try {
    const res = await axios.post<LoginResponse>(
      "http://localhost:5500/auth/login",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Login response:", res.data); //->for debugging
    return res.data;
  } catch (error) {
    console.log("Full error:", error); // log full error object
    throw error;
  }
};
