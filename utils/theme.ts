import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

const light: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#00b2ff",
    },
    text: {
      primary: "#23272A",
      secondary: "#2C2F33",
    },
    background: {
      default: "#303030",
    },
  },
};

const dark: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#00b2ff",
    },
    text: {
      primary: "#fff",
      secondary: "#99AAB5",
    },
    background: {
      default: "#303030",
    },
  },
};

const defaultTheme: ThemeOptions = {
  palette: {
    primary: {
      main: "#00b2ff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
};

export const lightTheme = createMuiTheme({ ...defaultTheme, ...light });
export const darkTheme = createMuiTheme({ ...defaultTheme, ...dark });
