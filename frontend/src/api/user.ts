import axios from "axios";
import { UserSignupInput, SignupRequestResponse } from "../types/User.ts";

//Signup api call
export const signupRequest = async ({
  name,
  lastName,
  email,
  username,
  password,
  birthDate,
  gender,
  photo,
}: UserSignupInput) => {
  try {
    const res = await axios.post<SignupRequestResponse>(
      "http://localhost:5500/auth/login",
      {
        name,
        lastName,
        email,
        username,
        password,
        birthDate,
        gender,
        photo,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Signup response:", res.data); //->for debugging
    return res.data;
  } catch (error) {
    console.log("Full error:", error); // log full error object
    throw error;
  }
};

//Update profile api call

//Delete user Api call
