import app from "./axios";

export type SignUpPayload = {
  username: string;
  email: string;
  password: string;
};

export const userSignUp = async ({
  username,
  email,
  password,
}: SignUpPayload) => {
  const response = await app.post("/signup", {
    username,
    email,
    password,
  });
  return response.data;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export const userSignIn = async ({ email, password }: SignInPayload) => {
  const response = await app.post("/signin", {
    email,
    password,
  });
  return response.data;
};

export const userGoogleAuth = async (idToken: string) => {
  const response = await app.post("/auth/google", { idToken });
  return response.data;
};

export const userLogout = async () => {
  const response = await app.post("/logout");
  return response.data;
};
