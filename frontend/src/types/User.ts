export type UserProfile = {
  username: string;
  description: string; //subject to change
  photo: string;
};

export interface UserCardProps{
  user: UserProfile;
}
