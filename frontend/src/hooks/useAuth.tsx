import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api/auth";
import { LoginParams, LoginResponse } from "../types/Login";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);

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

  const login = (credentials: LoginParams) => {
    loginMutation.mutate(credentials);
  };

  return {
    login,
    error,
    setError,
    isLoading: loginMutation.isPending,
    isError: loginMutation.isError,
    isSuccess: loginMutation.isSuccess,
  };
};
