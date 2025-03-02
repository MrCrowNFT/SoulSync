import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { loginRequest, logoutRequest, refreshTokenRequest } from "../api/auth";
import {
  LoginParams,
  LoginResponse,
  LogoutResponse,
  RefreshTokenResponse,
} from "../types/Auth";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);

  //Login Logic
  const loginMutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data: LoginResponse) => {
      //check status code
      if (data.success) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setError(null);
        //todo: navigate the user or update UI state here
      } else {
        // in case API returns success: false but doesn't throw an error
        setError(data.message || "Login failed");
      }
    },
    onError: (error: unknown) => {
      console.error("Login error:", error);
      // type check the error object
      if (axios.isAxiosError(error) && error.response?.data) {
        setError(error.response.data.message || "Login failed");
      } else {
        setError("An unexpected error occurred");
      }
    },
  });

  //Refresh token logic
  const refreshTokenMutation = useMutation({
    mutationFn: refreshTokenRequest,
    onSuccess: (data: RefreshTokenResponse) => {
      if (data.success && data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        setError(null);
      } else {
        setError(data.message || "Failed to refresh token");
      }
    },
    onError: (error: unknown) => {
      console.error("Refresh token error:", error);
      if (axios.isAxiosError(error) && error.response?.data) {
        setError(error.response.data.message || "Token refresh failed");
      } else {
        setError("An unexpected error occurred while refreshing token");
      }
    },
  });

  //Logout logic
  const logoutMutation = useMutation({
    mutationFn: logoutRequest,
    onSuccess: (data: LogoutResponse) => {
      if (data.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setError(null);
      } else {
        setError(data.message || "Failed to logout");
      }
    },
    onError: (error: unknown) => {
      console.error("Logout error:", error);
      if (axios.isAxiosError(error) && error.response?.data) {
        setError(error.response.data.message || "Logout failed");
      } else {
        setError("An unexpected error occurred while logging out");
      }
    },
  });

  const login = (credentials: LoginParams) => {
    loginMutation.mutate(credentials);
  };
  const refreshToken = () => {
    refreshTokenMutation.mutate();
  };
  const logout = () => {
    logoutMutation.mutate();
  };

  return {
    login,
    refreshToken,
    logout,
    error,
    setError,
    isLoading:
      loginMutation.isPending ||
      refreshTokenMutation.isPending ||
      logoutMutation.isPending,
    isError:
      loginMutation.isError ||
      refreshTokenMutation.isError ||
      logoutMutation.isError,
    isSuccess:
      loginMutation.isSuccess ||
      refreshTokenMutation.isSuccess ||
      logoutMutation.isSuccess,
    loginStatus: {
      isPending: loginMutation.isPending,
      isError: loginMutation.isError,
      isSuccess: loginMutation.isSuccess,
    },
    refreshStatus: {
      isPending: refreshTokenMutation.isPending,
      isError: refreshTokenMutation.isError,
      isSuccess: refreshTokenMutation.isSuccess,
    },
    logoutStatus: {
      isPending: logoutMutation.isPending,
      isError: logoutMutation.isError,
      isSuccess: logoutMutation.isSuccess,
    },
  };
};
