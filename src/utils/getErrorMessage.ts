import { isAxiosError } from "axios";

export const getErrorMessage = (error: unknown): string => {
  if (isAxiosError(error)) {
    return (
      error.response?.data?.message ?? "Something went wrong. Please try again."
    );
  }
  return "Something went wrong. Please try again.";
};
