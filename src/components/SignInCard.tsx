import { Typography, Divider, TextField, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import {
  PageContainer,
  CardPaper,
  HeaderBox,
  LockAvatar,
  GoogleButtonWrapper,
  FormBox,
  ForgotPasswordBox,
  SignInButton,
} from "./SignInCard.styles";
import Cookies from "js-cookie";

export default function SignInCard() {
  const handleGoogleLogin = (credentialResponse: CredentialResponse) => {
    Cookies.set("accessToken", credentialResponse?.credential ?? "");
  };

  return (
    <PageContainer>
      <CardPaper elevation={0}>
        <HeaderBox>
          <LockAvatar>
            <LockOutlinedIcon />
          </LockAvatar>
          <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
            Welcome back
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            Sign in to continue to your dashboard
          </Typography>
        </HeaderBox>

        <GoogleButtonWrapper>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
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

        <FormBox>
          <TextField
            label="Email address"
            type="email"
            fullWidth
            variant="outlined"
            size="medium"
            autoComplete="email"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            size="medium"
            autoComplete="current-password"
          />

          <ForgotPasswordBox>
            <Link href="#" underline="hover" variant="body2" color="primary">
              Forgot password?
            </Link>
          </ForgotPasswordBox>

          <SignInButton fullWidth variant="contained" size="large">
            Sign in
          </SignInButton>
        </FormBox>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", mt: 3 }}
        >
          Don&apos;t have an account?{" "}
          <Link href="#" underline="hover" sx={{ fontWeight: 600 }}>
            Sign up
          </Link>
        </Typography>
      </CardPaper>
    </PageContainer>
  );
}
