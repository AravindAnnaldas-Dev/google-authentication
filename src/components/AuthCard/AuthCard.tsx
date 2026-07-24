import {
  Typography,
  Divider,
  TextField,
  Link,
  Alert,
  CircularProgress,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import {
  PageContainer,
  CardPaper,
  HeaderBox,
  LockAvatar,
  GoogleButtonWrapper,
  FormBox,
  SignInButton,
} from "./AuthCard.styles";
import { signInSchema, signUpSchema } from "../../validations/authSchema";
import { useGoogleAuth, useSignIn, useSignUp } from "../../hooks/useSign";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  ACCESS_TOKEN_COOKIE_OPTIONS,
  REFRESH_TOKEN_COOKIE_OPTIONS,
} from "../../constants/cookies";

type AuthCardProps = {
  mode: "sign-in" | "sign-up";
  onToggleMode: () => void;
  onSignUpSuccess?: () => void;
  justSignedUp?: boolean;
};

export default function AuthCard({
  mode,
  onToggleMode,
  onSignUpSuccess,
  justSignedUp = false,
}: AuthCardProps) {
  const isSignUp = mode === "sign-up";

  const signInMutation = useSignIn();
  const signUpMutation = useSignUp();
  const googleAuthMutation = useGoogleAuth();
  const navigate = useNavigate();

  const emailPasswordMutation = isSignUp ? signUpMutation : signInMutation;

  const isLoading =
    emailPasswordMutation.isPending || googleAuthMutation.isPending;
  const errorMessage = emailPasswordMutation.isError
    ? getErrorMessage(emailPasswordMutation.error)
    : googleAuthMutation.isError
      ? getErrorMessage(googleAuthMutation.error)
      : null;
  const successMessage = !errorMessage
    ? (emailPasswordMutation.data?.message ??
      googleAuthMutation.data?.message ??
      null)
    : null;

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: isSignUp ? signUpSchema : signInSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (isSignUp) {
        signUpMutation.mutate(values, {
          onSuccess: () => onSignUpSuccess?.(),
        });
      } else {
        signInMutation.mutate(
          {
            email: values.email,
            password: values.password,
          },
          {
            onSuccess: (data) => {
              Cookies.set(
                ACCESS_TOKEN_COOKIE,
                data.token,
                ACCESS_TOKEN_COOKIE_OPTIONS,
              );
              Cookies.set(
                REFRESH_TOKEN_COOKIE,
                data.refresh,
                REFRESH_TOKEN_COOKIE_OPTIONS,
              );
              navigate("/dashboard");
            },
          },
        );
      }
    },
  });

  const handleGoogleAuth = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse?.credential) {
      return;
    }

    googleAuthMutation.mutate(credentialResponse.credential, {
      onSuccess: (data) => {
        Cookies.set(ACCESS_TOKEN_COOKIE, data.token, ACCESS_TOKEN_COOKIE_OPTIONS);
        Cookies.set(
          REFRESH_TOKEN_COOKIE,
          data.refresh,
          REFRESH_TOKEN_COOKIE_OPTIONS,
        );
        navigate("/dashboard");
      },
      onError: (error) => {
        console.log(error, "Google Authentication Error.");
      },
    });
  };

  return (
    <PageContainer>
      <CardPaper elevation={0}>
        <HeaderBox>
          <LockAvatar>
            <LockOutlinedIcon />
          </LockAvatar>
          <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
            {isSignUp ? "Create an account" : "Welcome back"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            {isSignUp
              ? "Sign up to get started"
              : "Sign in to continue to your dashboard"}
          </Typography>
        </HeaderBox>

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        {!justSignedUp && (
          <>
            <GoogleButtonWrapper
              sx={
                isLoading ? { opacity: 0.6, pointerEvents: "none" } : undefined
              }
            >
              <GoogleLogin
                onSuccess={handleGoogleAuth}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleButtonWrapper>

            <Divider sx={{ my: 3 }}>
              <Typography variant="caption" color="text.secondary">
                or continue with email
              </Typography>
            </Divider>
          </>
        )}

        <FormBox onSubmit={formik.handleSubmit}>
          {isSignUp && (
            <TextField
              name="username"
              label="Username"
              fullWidth
              variant="outlined"
              size="medium"
              autoComplete="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          )}

          <TextField
            name="email"
            label="Email address"
            type="email"
            fullWidth
            variant="outlined"
            size="medium"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            size="medium"
            autoComplete={isSignUp ? "new-password" : "current-password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <SignInButton type="submit" fullWidth disabled={isLoading}>
            {isLoading ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CircularProgress size={16} color="inherit" />
                {isSignUp ? "Signing up..." : "Signing in..."}
              </Box>
            ) : isSignUp ? (
              "Sign up"
            ) : (
              "Sign in"
            )}
          </SignInButton>
        </FormBox>

        {isSignUp ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", mt: 3 }}
          >
            Already have an account?{" "}
            <Link
              onClick={onToggleMode}
              underline="hover"
              sx={{ fontWeight: 600, cursor: "pointer" }}
            >
              Sign in
            </Link>
          </Typography>
        ) : (
          !justSignedUp && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", mt: 3 }}
            >
              Don&apos;t have an account?{" "}
              <Link
                onClick={onToggleMode}
                underline="hover"
                sx={{ fontWeight: 600, cursor: "pointer" }}
              >
                Sign up
              </Link>
            </Typography>
          )
        )}
      </CardPaper>
    </PageContainer>
  );
}
