import {
  Box,
  Paper,
  Avatar,
  Typography,
  Divider,
  TextField,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "./icons/GoogleIcon.tsx";

export default function SignInCard() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top left, #eef2ff 0%, #f7f8fc 45%, #ffffff 100%)",
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: { xs: 3, sm: 5 },
          borderRadius: 4,
          border: "1px solid",
          borderColor: "grey.200",
          boxShadow:
            "0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 32px -8px rgba(16, 24, 40, 0.12)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
          <Avatar
            sx={{
              width: 56,
              height: 56,
              mb: 2,
              bgcolor: "primary.main",
              boxShadow: "0 8px 20px -6px rgba(63, 81, 181, 0.5)",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
            Welcome back
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
            Sign in to continue to your dashboard
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            py: 1.25,
            borderRadius: 2,
            borderColor: "grey.300",
            color: "text.primary",
            textTransform: "none",
            fontWeight: 600,
            bgcolor: "#fff",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              borderColor: "grey.400",
              bgcolor: "grey.50",
              boxShadow: "0 2px 6px rgba(16, 24, 40, 0.08)",
            },
          }}
        >
          Continue with Google
        </Button>

        <Divider sx={{ my: 3 }}>
          <Typography variant="caption" color="text.secondary">
            or continue with email
          </Typography>
        </Divider>

        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <TextField
            label="Email address"
            type="email"
            fullWidth
            variant="outlined"
            size="medium"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            size="medium"
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: -1 }}>
            <Link href="#" underline="hover" variant="body2" color="primary">
              Forgot password?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              py: 1.25,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "0 8px 20px -6px rgba(63, 81, 181, 0.5)",
            }}
          >
            Sign in
          </Button>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", mt: 3 }}>
          Don&apos;t have an account?{" "}
          <Link href="#" underline="hover" sx={{ fontWeight: 600 }}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
