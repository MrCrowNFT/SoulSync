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
export interface UserSignupInput {
  name: string;
  lastName: string;
  username: string;
  gender: 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say';
  email: string;
  password: string;
  confirmPassword: string; // Added for password confirmation
  photo?: string; // Optional profile photo
  birthDate: string; // Date as ISO string (YYYY-MM-DD)
}