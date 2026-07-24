import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Fade,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import Cookies from "js-cookie";
import { useUsersList } from "../../hooks/useUsersList";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
} from "../../constants/cookies";
import { INDIGO } from "../../theme";
import {
  PageWrapper,
  TopBar,
  ContentContainer,
  StatGrid,
  StatCard,
  StatIconBadge,
  StatTrend,
  TableCard,
  UserAvatar,
} from "./Dashboard.styles";

type DashboardProps = {
  onLogout?: () => void;
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Dashboard({ onLogout }: DashboardProps) {
  const { data: users, isLoading, isError } = useUsersList();

  const handleLogout = () => {
    Cookies.remove(ACCESS_TOKEN_COOKIE);
    Cookies.remove(REFRESH_TOKEN_COOKIE);
    onLogout?.();
  };

  const totalUsers = users?.length ?? 0;

  return (
    <PageWrapper>
      <TopBar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            sx={{
              bgcolor: INDIGO[600],
              width: 36,
              height: 36,
              borderRadius: "10px",
            }}
          >
            <LockOutlinedIcon fontSize="small" />
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Dashboard
          </Typography>
        </Box>

        <Tooltip title="Log out">
          <IconButton onClick={handleLogout} color="default">
            <LogoutRoundedIcon />
          </IconButton>
        </Tooltip>
      </TopBar>

      <ContentContainer>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          Welcome back
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Here's what's happening with your users today.
        </Typography>

        <Fade in timeout={400}>
          <StatGrid>
            <StatCard elevation={0}>
              <StatIconBadge bg={INDIGO[600]}>
                <PeopleAltRoundedIcon />
              </StatIconBadge>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {isLoading ? "—" : totalUsers}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total users
                </Typography>
                <StatTrend positive sx={{ mt: 0.5 }}>
                  <TrendingUpRoundedIcon sx={{ fontSize: 14 }} />
                  Live
                </StatTrend>
              </Box>
            </StatCard>

            <StatCard elevation={0}>
              <StatIconBadge bg="#16a34a">
                <VerifiedUserRoundedIcon />
              </StatIconBadge>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {isLoading ? "—" : totalUsers}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active accounts
                </Typography>
                <StatTrend positive sx={{ mt: 0.5 }}>
                  <TrendingUpRoundedIcon sx={{ fontSize: 14 }} />
                  100%
                </StatTrend>
              </Box>
            </StatCard>

            <StatCard elevation={0}>
              <StatIconBadge bg="#d97706">
                <PersonAddAltRoundedIcon />
              </StatIconBadge>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {isLoading ? "—" : Math.min(totalUsers, 5)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  New this week
                </Typography>
                <StatTrend positive sx={{ mt: 0.5 }}>
                  <TrendingUpRoundedIcon sx={{ fontSize: 14 }} />
                  This week
                </StatTrend>
              </Box>
            </StatCard>
          </StatGrid>
        </Fade>

        <TableCard elevation={0}>
          <Box
            sx={{
              px: 3,
              py: 2.5,
              borderBottom: "1px solid #eaecf0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Users
            </Typography>
            <Button variant="text" size="small" sx={{ textTransform: "none" }}>
              View all
            </Button>
          </Box>

          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
              <CircularProgress size={28} />
            </Box>
          ) : isError ? (
            <Box sx={{ py: 6, textAlign: "center" }}>
              <Typography color="text.secondary">
                Couldn't load users. Please try again later.
              </Typography>
            </Box>
          ) : totalUsers === 0 ? (
            <Box sx={{ py: 6, textAlign: "center" }}>
              <Typography color="text.secondary">No users yet.</Typography>
            </Box>
          ) : (
            <TableContainer sx={{ overflowX: "auto" }}>
              <Table sx={{ minWidth: 480 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align="right">Provider Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users?.map((user, index) => (
                    <TableRow key={index} hover>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                          }}
                        >
                          <UserAvatar>{getInitials(user.username)}</UserAvatar>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {user.username}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {user.email}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" color="text.secondary">
                          {user.provider}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </TableCard>
      </ContentContainer>
    </PageWrapper>
  );
}
