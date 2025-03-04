import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { signupRequest } from "../api/user";
import { SignupResponse, UserSignupInput } from "../types/User";

export const useUser = () => {
  const [error, setError] = useState<string | null>(null);

  const signupMutation = useMutation({
    mutationFn: signupRequest,
    onSuccess: (data: SignupResponse) => {
      //check status code
      if (data.success) {
        setError(null);
      } else {
        // in case API returns success: false but doesn't throw an error
        setError(data.message || "Signup failed");
      }
    },
    onError: (error: unknown) => {
      console.error("Signup error:", error);
      // type check the error object
      if (axios.isAxiosError(error) && error.response?.data) {
        setError(error.response.data.message || "Signup failed");
      } else {
        setError("An unexpected error occurred");
      }
    },
  });

  const signup = (SignupInput: UserSignupInput) => {
    signupMutation.mutate(SignupInput);
  };

  return {
    signup,
    error,
    setError,
    isLoading: signupMutation.isPending,
    isError: signupMutation.isError,
    isSuccess: signupMutation.isSuccess,
    signupStatus: {
      isPending: signupMutation.isPending,
      isError: signupMutation.isError,
      isSuccess: signupMutation.isSuccess,
    },
  };
};
