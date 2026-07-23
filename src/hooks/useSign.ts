import { useMutation } from "@tanstack/react-query";
import { userGoogleAuth, userSignIn, userSignUp } from "../api/auth";

export const useSignUp = () =>
  useMutation({
    mutationFn: userSignUp,
  });

export const useSignIn = () =>
  useMutation({
    mutationFn: userSignIn,
  });

export const useGoogleAuth = () =>
  useMutation({
    mutationFn: userGoogleAuth,
  });
