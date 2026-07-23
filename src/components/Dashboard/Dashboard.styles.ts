import { styled } from "@mui/material/styles";
import { Box, Paper, Avatar } from "@mui/material";

export const PageWrapper = styled(Box)({
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, #eef2ff 0%, #f7f8fc 45%, #ffffff 100%)",
});

export const TopBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 24px",
  backgroundColor: "#ffffff",
  borderBottom: "1px solid #eaecf0",

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
  border: "1px solid #eaecf0",
  boxShadow:
    "0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 20px -8px rgba(16, 24, 40, 0.1)",
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const StatIconBadge = styled(Box)<{ bg: string }>(({ bg }) => ({
  width: 48,
  height: 48,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: bg,
  color: "#ffffff",
  flexShrink: 0,
}));

export const TableCard = styled(Paper)({
  borderRadius: 16,
  border: "1px solid #eaecf0",
  boxShadow:
    "0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 20px -8px rgba(16, 24, 40, 0.1)",
  overflow: "hidden",
});

export const UserAvatar = styled(Avatar)({
  width: 36,
  height: 36,
  backgroundColor: "#3f51b5",
  fontSize: 14,
  fontWeight: 600,
});
