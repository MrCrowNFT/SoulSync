// types for the login parameters
export interface LoginParams {
  username: string;
  password: string;
}

// response type from API
export interface LoginResponse {
  success: boolean;
  message: string;
  accessToken: string;
  refreshToken: string;
}

export interface RefreshTokenResponse {
  success: boolean;
  accessToken?: string;
  message?: string;
}
