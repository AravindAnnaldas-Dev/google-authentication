import app from "./axios";

export type User = {
  username: string;
  email: string;
  provider: string;
};

type UsersListResponse = {
  message: string;
  data: User[];
};

export const getUsersList = async (): Promise<User[]> => {
  const response = await app.get<UsersListResponse>("/users");
  return response.data.data;
};
