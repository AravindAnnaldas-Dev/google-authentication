import { createTheme, alpha } from "@mui/material/styles";

const INDIGO = {
  50: "#eef1ff",
  100: "#e0e4ff",
  200: "#c6ccfd",
  300: "#a5abfa",
  400: "#8781f5",
  500: "#6e62e8",
  600: "#5b4bd6",
  700: "#4c3cb5",
  800: "#3f3391",
  900: "#352d74",
};

const NEUTRAL = {
  25: "#fcfcfd",
  50: "#f9fafb",
  100: "#f2f4f7",
  200: "#eaecf0",
  300: "#d0d5dd",
  400: "#98a2b3",
  500: "#667085",
  600: "#475467",
  700: "#344054",
  800: "#1d2939",
  900: "#101828",
};

const shadowColor = "16, 24, 40";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: INDIGO[600],
      light: INDIGO[400],
      dark: INDIGO[800],
      contrastText: "#ffffff",
    },
    secondary: {
      main: NEUTRAL[700],
    },
    success: {
      main: "#16a34a",
    },
    warning: {
      main: "#d97706",
    },
    error: {
      main: "#dc2626",
    },
    background: {
      default: NEUTRAL[25],
      paper: "#ffffff",
    },
    text: {
      primary: NEUTRAL[900],
      secondary: NEUTRAL[500],
    },
    divider: NEUTRAL[200],
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.015em" },
    h4: { fontWeight: 700, letterSpacing: "-0.015em" },
    h5: { fontWeight: 700, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600, letterSpacing: "-0.01em" },
    subtitle1: { fontWeight: 600 },
    subtitle2: { fontWeight: 600 },
    body1: { letterSpacing: "-0.006em" },
    body2: { letterSpacing: "-0.006em" },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "-0.006em",
    },
  },
  shadows: [
    "none",
    `0 1px 2px rgba(${shadowColor}, 0.04)`,
    `0 1px 3px rgba(${shadowColor}, 0.06), 0 1px 2px rgba(${shadowColor}, 0.04)`,
    `0 2px 4px -1px rgba(${shadowColor}, 0.06), 0 4px 6px -1px rgba(${shadowColor}, 0.06)`,
    `0 4px 8px -2px rgba(${shadowColor}, 0.08), 0 8px 16px -4px rgba(${shadowColor}, 0.08)`,
    `0 4px 8px -2px rgba(${shadowColor}, 0.08), 0 12px 20px -6px rgba(${shadowColor}, 0.1)`,
    `0 6px 12px -4px rgba(${shadowColor}, 0.08), 0 14px 24px -6px rgba(${shadowColor}, 0.1)`,
    `0 8px 16px -4px rgba(${shadowColor}, 0.1), 0 16px 28px -8px rgba(${shadowColor}, 0.12)`,
    `0 1px 2px rgba(${shadowColor}, 0.04), 0 12px 32px -8px rgba(${shadowColor}, 0.12)`,
    `0 10px 20px -6px rgba(${shadowColor}, 0.1), 0 18px 32px -10px rgba(${shadowColor}, 0.12)`,
    `0 10px 24px -6px rgba(${shadowColor}, 0.1), 0 20px 36px -10px rgba(${shadowColor}, 0.14)`,
    `0 12px 24px -6px rgba(${shadowColor}, 0.1), 0 22px 40px -10px rgba(${shadowColor}, 0.14)`,
    `0 12px 28px -6px rgba(${shadowColor}, 0.12), 0 24px 44px -10px rgba(${shadowColor}, 0.15)`,
    `0 14px 30px -6px rgba(${shadowColor}, 0.12), 0 26px 48px -10px rgba(${shadowColor}, 0.16)`,
    `0 14px 32px -8px rgba(${shadowColor}, 0.12), 0 28px 52px -12px rgba(${shadowColor}, 0.16)`,
    `0 16px 34px -8px rgba(${shadowColor}, 0.13), 0 30px 56px -12px rgba(${shadowColor}, 0.17)`,
    `0 16px 36px -8px rgba(${shadowColor}, 0.13), 0 32px 60px -12px rgba(${shadowColor}, 0.18)`,
    `0 18px 38px -8px rgba(${shadowColor}, 0.14), 0 34px 64px -14px rgba(${shadowColor}, 0.18)`,
    `0 18px 40px -10px rgba(${shadowColor}, 0.14), 0 36px 68px -14px rgba(${shadowColor}, 0.19)`,
    `0 20px 42px -10px rgba(${shadowColor}, 0.15), 0 38px 72px -14px rgba(${shadowColor}, 0.19)`,
    `0 20px 44px -10px rgba(${shadowColor}, 0.15), 0 40px 76px -16px rgba(${shadowColor}, 0.2)`,
    `0 22px 46px -10px rgba(${shadowColor}, 0.16), 0 42px 80px -16px rgba(${shadowColor}, 0.2)`,
    `0 22px 48px -12px rgba(${shadowColor}, 0.16), 0 44px 84px -16px rgba(${shadowColor}, 0.21)`,
    `0 24px 50px -12px rgba(${shadowColor}, 0.17), 0 46px 88px -18px rgba(${shadowColor}, 0.21)`,
    `0 24px 52px -12px rgba(${shadowColor}, 0.17), 0 48px 92px -18px rgba(${shadowColor}, 0.22)`,
    `0 26px 54px -12px rgba(${shadowColor}, 0.18), 0 50px 96px -18px rgba(${shadowColor}, 0.22)`,
  ] as unknown as import("@mui/material/styles").Shadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: NEUTRAL[25],
          fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
        },
        "*": {
          scrollbarWidth: "thin",
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          paddingTop: 9,
          paddingBottom: 9,
          paddingLeft: 18,
          paddingRight: 18,
          transition:
            "background-color 160ms ease, box-shadow 160ms ease, border-color 160ms ease, transform 120ms ease",
          "&:active": {
            transform: "translateY(1px)",
          },
        },
        contained: {
          boxShadow: `0 1px 2px rgba(${shadowColor}, 0.05), 0 1px 3px ${alpha(
            INDIGO[600],
            0.35,
          )}`,
          "&:hover": {
            boxShadow: `0 4px 10px -2px ${alpha(INDIGO[600], 0.45)}`,
          },
        },
        outlined: {
          borderColor: NEUTRAL[300],
          "&:hover": {
            borderColor: NEUTRAL[400],
            backgroundColor: NEUTRAL[50],
          },
        },
        sizeLarge: {
          paddingTop: 11,
          paddingBottom: 11,
          fontSize: 15,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition: "background-color 160ms ease, color 160ms ease",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#ffffff",
          transition: "box-shadow 160ms ease, border-color 160ms ease",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: NEUTRAL[300],
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: NEUTRAL[400],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: INDIGO[600],
            borderWidth: 1.5,
          },
          "&.Mui-focused": {
            boxShadow: `0 0 0 4px ${alpha(INDIGO[600], 0.12)}`,
          },
          "&.Mui-error.Mui-focused": {
            boxShadow: `0 0 0 4px ${alpha("#dc2626", 0.12)}`,
          },
        },
        input: {
          padding: "12px 14px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            backgroundColor: NEUTRAL[50],
            color: NEUTRAL[500],
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            borderBottom: `1px solid ${NEUTRAL[200]}`,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: "background-color 120ms ease",
          "&:last-child .MuiTableCell-root": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${NEUTRAL[100]}`,
          padding: "14px 24px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: NEUTRAL[200],
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: INDIGO[600],
          fontWeight: 600,
          "&:hover": {
            color: INDIGO[700],
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 500,
          backgroundColor: NEUTRAL[800],
        },
      },
    },
  },
});

export default theme;
export { INDIGO, NEUTRAL };
