export const ACCESS_TOKEN_COOKIE = "accessToken";
export const REFRESH_TOKEN_COOKIE = "refreshToken";

export const ACCESS_TOKEN_COOKIE_OPTIONS = {
  expires: 1 / 96, // 15 minutes
  secure: true,
  sameSite: "strict" as const,
};

export const REFRESH_TOKEN_COOKIE_OPTIONS = {
  expires: 7, // 7 days
  secure: true,
  sameSite: "strict" as const,
};
