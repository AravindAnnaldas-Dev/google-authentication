import { styled } from "@mui/material/styles";
import { Box, Paper, Avatar, Button } from "@mui/material";

export const PageContainer = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "radial-gradient(circle at top left, #eef2ff 0%, #f7f8fc 45%, #ffffff 100%)",
  padding: 16,
});

export const CardPaper = styled(Paper)({
  width: "100%",
  maxWidth: 400,
  padding: 24,
  borderRadius: 16,
  border: "1px solid",
  borderColor: "#eaecf0",
  boxShadow:
    "0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 32px -8px rgba(16, 24, 40, 0.12)",

  "@media (min-width: 600px)": {
    padding: 40,
  },
});

export const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 32,
});

export const LockAvatar = styled(Avatar)({
  width: 56,
  height: 56,
  marginBottom: 16,
  backgroundColor: "#3f51b5",
  boxShadow: "0 8px 20px -6px rgba(63, 81, 181, 0.5)",
});

export const GoogleButtonWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",

  "& > div": {
    width: "100% !important",
  },
});

export const FormBox = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

export const ForgotPasswordBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: -8,
});

export const SignInButton = styled(Button)({
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 8,
  textTransform: "none",
  fontWeight: 600,
  boxShadow: "0 8px 20px -6px rgba(63, 81, 181, 0.5)",
});
