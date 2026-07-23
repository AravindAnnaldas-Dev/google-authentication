import app from "./axios";

export type User = {
  id: number;
  username: string;
  email: string;
};

type UsersListResponse = {
  message: string;
  data: User[];
};

export const getUsersList = async (): Promise<User[]> => {
  const response = await app.get<UsersListResponse>("/users");
  return response.data.data;
};
