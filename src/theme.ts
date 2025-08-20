import {createTheme} from "@mui/material/styles";

export function getTheme(mode: "light" | "dark") {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#e91e63", 
      },
      ...(mode === "dark"
        ? {
            text: {
              primary: "#ffffff", 
              secondary: "#eeeeee",
            },
            background: {
              default: "#121212", 
              paper: "#1e1e1e",
            },
          }
        : {}),
    },
  });
}
