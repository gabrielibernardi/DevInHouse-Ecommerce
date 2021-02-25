import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "rgba(229, 229, 229, 1)" },
    primary: {
      light: "rgba(235, 215, 255, 1)",
      main: "rgba(128, 0, 255, 1)",
      dark: "rgba(100, 1, 199, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(245, 70, 70, 1)",
      main: "rgba(255, 0, 0, 1)",
      dark: "rgba(165, 2, 2, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },

  typography: {
    fontFamily: ["Roboto"],
    h2: {
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px",
      color: "#000000",
    },
    h3: {
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px",
      color: "#000000",
    },
    h4: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px",
      color: "#000000",
    },

    body1: {
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "24px",
      color: "#000000",
    },

    body2: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "24px",
      color: "#9E9E9E",
    },
    body3: {
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "24px",
      color: "000000",
    },
  },
});
