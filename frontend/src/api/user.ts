import axios from "axios";
import { UserSignupInput } from "../types/User.ts";

//Signup api call
export const signupRequest = async ({
  name,
  lastName,
  email,
  username,
  password,
  confirmPassword,
  birthDate,
  gender,
  photo,
}: UserSignupInput) => {
    
};

//Update profile api call

//Delete user Api call
