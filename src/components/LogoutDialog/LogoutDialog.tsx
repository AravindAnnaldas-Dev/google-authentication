import { Button, DialogContent, Typography } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {
  StyledDialog,
  IconAvatar,
  ActionStack,
  ConfirmButton,
} from "./LogoutDialog.styles";

type LogoutDialogProps = {
  open: boolean;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function LogoutDialog({
  open,
  loading = false,
  onCancel,
  onConfirm,
}: LogoutDialogProps) {
  return (
    <StyledDialog
      open={open}
      onClose={loading ? undefined : onCancel}
      aria-labelledby="logout-dialog-title"
    >
      <DialogContent sx={{ p: 0 }}>
        <IconAvatar>
          <LogoutRoundedIcon fontSize="small" />
        </IconAvatar>

        <Typography
          id="logout-dialog-title"
          variant="h6"
          sx={{ fontWeight: 700, mb: 0.5 }}
        >
          Log out of your account?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You'll need to sign in again to access your dashboard.
        </Typography>

        <ActionStack>
          <Button
            onClick={onCancel}
            variant="outlined"
            color="secondary"
            disabled={loading}
          >
            Cancel
          </Button>
          <ConfirmButton onClick={onConfirm} disabled={loading}>
            {loading ? "Logging out…" : "Log out"}
          </ConfirmButton>
        </ActionStack>
      </DialogContent>
    </StyledDialog>
  );
}
