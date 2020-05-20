import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const styledTheme = {
  colors: {
    primary: "#0070f3",
  },
};

export const materialTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
      background: {
        default: "#fff",
      },
    },
  })
);
