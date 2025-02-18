export type Testimony = {
  photo: string;
  username: string;
  opinion: string;
};

export type TestimonyCardProps = {
  id: number;
  testimony: Testimony;
};
