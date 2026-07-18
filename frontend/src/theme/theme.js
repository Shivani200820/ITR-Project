import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1565C0",
      light: "#5E92F3",
      dark: "#0D47A1",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#00ACC1",
      light: "#5DDEF4",
      dark: "#007C91",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F7FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#102A43",
      secondary: "#52606D",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.6rem",
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3rem",
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.1rem",
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 14,
  },
  shadows: [
    "none",
    "0px 2px 8px rgba(21, 101, 192, 0.08)",
    "0px 4px 12px rgba(21, 101, 192, 0.12)",
    "0px 8px 20px rgba(21, 101, 192, 0.14)",
    "0px 12px 28px rgba(21, 101, 192, 0.16)",
    "0px 16px 36px rgba(21, 101, 192, 0.18)",
    "0px 20px 44px rgba(21, 101, 192, 0.2)",
    "0px 24px 56px rgba(21, 101, 192, 0.22)",
    "0px 28px 68px rgba(21, 101, 192, 0.24)",
    "0px 32px 80px rgba(21, 101, 192, 0.26)",
    "0px 36px 90px rgba(21, 101, 192, 0.28)",
    "0px 40px 100px rgba(21, 101, 192, 0.3)",
    "0px 44px 112px rgba(21, 101, 192, 0.32)",
    "0px 48px 124px rgba(21, 101, 192, 0.34)",
    "0px 52px 136px rgba(21, 101, 192, 0.36)",
    "0px 56px 148px rgba(21, 101, 192, 0.38)",
    "0px 60px 160px rgba(21, 101, 192, 0.4)",
    "0px 64px 172px rgba(21, 101, 192, 0.42)",
    "0px 68px 184px rgba(21, 101, 192, 0.44)",
    "0px 72px 196px rgba(21, 101, 192, 0.46)",
    "0px 76px 208px rgba(21, 101, 192, 0.48)",
    "0px 80px 220px rgba(21, 101, 192, 0.5)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 18px",
          boxShadow: "0 8px 20px rgba(21, 101, 192, 0.16)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
