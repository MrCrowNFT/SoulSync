import axios from "axios";
import {
  LoginParams,
  LoginResponse,
  LogoutResponse,
  RefreshTokenResponse,
} from "../types/Auth.ts";

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

export const refreshTokenRequest = async (): Promise<RefreshTokenResponse> => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      throw new Error("No refresh token found");
    }

    const res = await axios.post<RefreshTokenResponse>(
      "http://localhost:5500/auth/refresh-token",
      {
        refreshToken,
      }
    );
    console.log("Refresh Token response:", res.data); //->for debugging
    return res.data;
  } catch (error) {
    console.log("Full error:", error); // log full error object
    throw error;
  }
};

export const logoutRequest = async ():Promise<LogoutResponse>=>{
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      throw new Error("No refresh token found");
    }

    const res = await axios.post<LogoutResponse>(
      "http://localhost:5500/auth/logout",
      {
        refreshToken,
      }
    );
    console.log("Logout response:", res.data); //->for debugging
    return res.data;
  } catch (error) {
    console.log("Full error:", error); // log full error object
    throw error;
  }
};

