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
  photo?: string; // Optional profile photo
  birthDate: string; // Date as ISO string (YYYY-MM-DD)
}

// validation function for frontend
export function validateSignup(input: UserSignupInput): { isValid: boolean; errors: Partial<Record<keyof UserSignupInput, string>> } {
  const errors: Partial<Record<keyof UserSignupInput, string>> = {};

  // Name validation
  if (!input.name || input.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }

  // Last Name validation
  if (!input.lastName || input.lastName.trim().length < 2) {
    errors.lastName = "Last name must be at least 2 characters long";
  }

  // Username validation
  if (!input.username || input.username.trim().length < 3) {
    errors.username = "Username must be at least 3 characters long";
  }

  // Gender validation
  const validGenders: string[] = ['male', 'female', 'non-binary', 'other', 'prefer-not-to-say'];
  if (!input.gender || !validGenders.includes(input.gender)) {
    errors.gender = "Please select a valid gender";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Password validation
  if (!input.password || input.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  // Birth date validation
  const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!input.birthDate || !birthDateRegex.test(input.birthDate)) {
    errors.birthDate = "Please enter a valid birth date (YYYY-MM-DD)";
  } else {
    const birthDate = new Date(input.birthDate);
    const today = new Date();
    const minAge = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
    
    if (birthDate > today) {
      errors.birthDate = "Birth date cannot be in the future";
    } else if (birthDate > minAge) {
      errors.birthDate = "You must be at least 13 years old to sign up";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export interface SignupRequestResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    name: string;
    lastName: string;
    username: string;
    gender: 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say';
    email: string;
    photo?: string;
    birthDate: string;
  };
}