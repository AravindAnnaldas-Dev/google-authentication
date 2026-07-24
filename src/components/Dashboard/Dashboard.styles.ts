import { styled, alpha } from "@mui/material/styles";
import { Box, Paper, Avatar } from "@mui/material";
import { INDIGO, NEUTRAL } from "../../theme";

export const PageWrapper = styled(Box)({
  minHeight: "100vh",
  background: `radial-gradient(circle at top left, ${alpha(
    INDIGO[100],
    0.5,
  )} 0%, ${NEUTRAL[25]} 45%, ${NEUTRAL[25]} 100%)`,
});

export const TopBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 24px",
  backgroundColor: alpha("#ffffff", 0.75),
  backdropFilter: "blur(10px)",
  borderBottom: `1px solid ${NEUTRAL[200]}`,
  position: "sticky",
  top: 0,
  zIndex: 10,

  [theme.breakpoints.down("sm")]: {
    padding: "12px 16px",
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  margin: "0 auto",
  padding: "32px 24px",

  [theme.breakpoints.down("sm")]: {
    padding: "20px 16px",
  },
}));

export const StatGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 20,
  marginBottom: 32,

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const StatCard = styled(Paper)({
  padding: 24,
  borderRadius: 16,
  border: `1px solid ${NEUTRAL[200]}`,
  boxShadow:
    "0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 20px -8px rgba(16, 24, 40, 0.1)",
  display: "flex",
  alignItems: "center",
  gap: 16,
  transition: "transform 180ms ease, box-shadow 180ms ease",

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow:
      "0 1px 2px rgba(16, 24, 40, 0.04), 0 16px 28px -8px rgba(16, 24, 40, 0.14)",
  },
});

export const StatIconBadge = styled(Box)<{ bg: string }>(({ bg }) => ({
  width: 48,
  height: 48,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: alpha(bg, 0.12),
  color: bg,
  flexShrink: 0,
}));

export const StatTrend = styled(Box)<{ positive?: boolean }>(
  ({ positive = true }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontSize: 12,
    fontWeight: 600,
    color: positive ? "#16a34a" : "#dc2626",
  }),
);

export const TableCard = styled(Paper)({
  borderRadius: 16,
  border: `1px solid ${NEUTRAL[200]}`,
  boxShadow:
    "0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 20px -8px rgba(16, 24, 40, 0.1)",
  overflow: "hidden",
});

export const UserAvatar = styled(Avatar)({
  width: 36,
  height: 36,
  backgroundColor: INDIGO[600],
  fontSize: 13,
  fontWeight: 600,
});
