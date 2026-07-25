import { styled, alpha } from "@mui/material/styles";
import { Avatar, Box, Button, Dialog } from "@mui/material";
import { INDIGO } from "../../theme";

export const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    borderRadius: 20,
    width: "100%",
    maxWidth: 480,
    padding: "16px",
    textAlign: "center",
  },
});

export const IconAvatar = styled(Avatar)({
  width: 48,
  height: 48,
  margin: "0 auto 20px",
  borderRadius: 12,
  backgroundColor: INDIGO[50],
  color: INDIGO[600],
  boxShadow: `inset 0 0 0 1px ${alpha(INDIGO[600], 0.15)}`,
});

export const ActionStack = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 10,
  marginTop: 28,
});

export const ConfirmButton = styled(Button)({
  paddingTop: 11,
  paddingBottom: 11,
  borderRadius: 10,
  textTransform: "none",
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 1.5,
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
