import { styled, alpha } from "@mui/material/styles";
import { Box, Paper, Avatar, Button } from "@mui/material";
import { INDIGO, NEUTRAL } from "../../theme";

export const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  background: `radial-gradient(circle at 15% 10%, ${alpha(
    INDIGO[100],
    0.6,
  )} 0%, ${NEUTRAL[25]} 45%, ${NEUTRAL[25]} 100%)`,
  padding: 24,

  [theme.breakpoints.down("sm")]: {
    padding: 12,
  },
}));

export const SplitWrapper = styled(Box)({
  width: "100%",
  maxWidth: 960,
  margin: "auto",
  display: "flex",
  borderRadius: 20,
  overflow: "hidden",
  border: `1px solid ${NEUTRAL[200]}`,
  boxShadow:
    "0 1px 2px rgba(16, 24, 40, 0.04), 0 20px 48px -12px rgba(16, 24, 40, 0.14)",
  backgroundColor: "#ffffff",
});

export const BrandPanel = styled(Box)(({ theme }) => ({
  flex: "0 0 42%",
  position: "relative",
  padding: 48,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: `linear-gradient(155deg, ${INDIGO[700]} 0%, ${INDIGO[600]} 45%, ${INDIGO[500]} 100%)`,
  color: "#ffffff",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    width: 420,
    height: 420,
    borderRadius: "50%",
    top: -160,
    right: -160,
    background: alpha("#ffffff", 0.08),
  },

  "&::after": {
    content: '""',
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: "50%",
    bottom: -100,
    left: -80,
    background: alpha("#ffffff", 0.06),
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const BrandMark = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontWeight: 700,
  fontSize: 18,
  letterSpacing: "-0.01em",
  zIndex: 1,
});

export const BrandLogoDot = styled(Box)({
  width: 32,
  height: 32,
  borderRadius: 9,
  backgroundColor: alpha("#ffffff", 0.18),
  border: `1px solid ${alpha("#ffffff", 0.25)}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(6px)",
});

export const FormPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: 48,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minWidth: 0,

  [theme.breakpoints.down("sm")]: {
    padding: 28,
  },
}));

export const CardPaper = styled(Paper)({
  width: "100%",
  maxWidth: 400,
  margin: "0 auto",
});

export const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: 28,
});

export const LockAvatar = styled(Avatar)({
  width: 44,
  height: 44,
  marginBottom: 20,
  borderRadius: 12,
  backgroundColor: INDIGO[50],
  color: INDIGO[600],
  boxShadow: `inset 0 0 0 1px ${alpha(INDIGO[600], 0.15)}`,
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
  gap: 18,
});

export const ForgotPasswordBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: -8,
});

export const SignInButton = styled(Button)({
  paddingTop: 11,
  paddingBottom: 11,
  borderRadius: 10,
  textTransform: "none",
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 1.5,
  letterSpacing: "-0.006em",
  color: "#ffffff",
  background: `linear-gradient(180deg, ${INDIGO[500]} 0%, ${INDIGO[600]} 100%)`,
  boxShadow: `0 1px 2px rgba(16, 24, 40, 0.05), 0 4px 10px -2px ${alpha(
    INDIGO[600],
    0.4,
  )}`,

  "&:hover": {
    background: `linear-gradient(180deg, ${INDIGO[600]} 0%, ${INDIGO[700]} 100%)`,
    boxShadow: `0 4px 14px -2px ${alpha(INDIGO[600], 0.5)}`,
  },

  "&.Mui-disabled": {
    color: alpha("#ffffff", 0.7),
    background: INDIGO[200],
    boxShadow: "none",
  },
});
