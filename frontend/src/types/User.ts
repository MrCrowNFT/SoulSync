export type UserProfile = {
  username: string;
  description: string; //subject to change
  photo: string;
};

export interface UserCardProps {
  user: UserProfile;
}

//New user profile
//todo: replace the old one
export interface User{
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
  birthDate: string,
  gender: string,
}