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

    fontFamily: "Poppins, Arial, sans-serif",

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
    "0px 2px 8px rgba(21,101,192,0.08)",
    "0px 4px 12px rgba(21,101,192,0.12)",
    "0px 8px 20px rgba(21,101,192,0.14)",
    "0px 12px 28px rgba(21,101,192,0.16)",
    "0px 16px 36px rgba(21,101,192,0.18)",
    "0px 20px 44px rgba(21,101,192,0.20)",
    "0px 24px 56px rgba(21,101,192,0.22)",
    "0px 28px 68px rgba(21,101,192,0.24)",
    "0px 32px 80px rgba(21,101,192,0.26)",
    "0px 36px 90px rgba(21,101,192,0.28)",
    "0px 40px 100px rgba(21,101,192,0.30)",
    ...Array(9).fill("0px 10px 30px rgba(15,23,42,0.08)")
  ],



  components: {


    // Buttons
    MuiButton: {

      styleOverrides: {

        root: {

          borderRadius:12,

          padding:"10px 18px",

          fontWeight:600,

          boxShadow:
          "0 8px 20px rgba(21,101,192,0.16)",

          transition:"0.3s ease",


          "&:hover":{

            transform:"translateY(-3px)",

            boxShadow:
            "0 12px 25px rgba(21,101,192,0.25)"

          }

        }

      }

    },



    // Cards

    MuiCard: {

      styleOverrides: {

        root: {

          borderRadius:16,

          boxShadow:
          "0 10px 30px rgba(15,23,42,0.08)",


          transition:"0.3s ease",


          "&:hover":{

            transform:"translateY(-6px)",

            boxShadow:
            "0 18px 40px rgba(15,23,42,0.15)"

          }

        }

      }

    },



    // Paper

    MuiPaper: {

      styleOverrides: {

        root: {

          borderRadius:16,

          boxShadow:
          "0 10px 30px rgba(15,23,42,0.08)"

        }

      }

    },



    // Text Fields

    MuiTextField: {

      defaultProps: {

        variant:"outlined"

      }

    },



    // Chips

    MuiChip: {

      styleOverrides: {

        root: {

          borderRadius:10,

          fontWeight:600

        }

      }

    },



    // Dialog

    MuiDialog: {

      styleOverrides: {

        paper: {

          borderRadius:20,

          padding:"10px"

        }

      }

    },



    // Navbar

    MuiAppBar: {

      styleOverrides: {

        root: {

          background:"#FFFFFF",

          color:"#102A43",

          boxShadow:
          "0 4px 20px rgba(0,0,0,0.08)"

        }

      }

    },


  },



  breakpoints: {

    values: {

      xs:0,

      sm:600,

      md:900,

      lg:1200,

      xl:1536,

    },

  },


});


export default theme;