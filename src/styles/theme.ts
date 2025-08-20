import { createTheme } from "@mui/material/styles";
import { COLORS } from "@/Styles/Colors";

export function getTheme(mode: "light" | "dark") {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: COLORS.PRIMARY,
      },
      ...(mode === "dark"
        ? {
            text: {
              primary: COLORS.DARK.TEXT_PRIMARY,
              secondary: COLORS.DARK.TEXT_SECONDARY,
            },
            background: {
              default: COLORS.DARK.BACKGROUND,
              paper: COLORS.DARK.PAPER,
            },
          }
        : {
            text: {
              primary: COLORS.LIGHT.TEXT_PRIMARY,
              secondary: COLORS.LIGHT.TEXT_SECONDARY,
            },
            background: {
              default: COLORS.LIGHT.BACKGROUND,
              paper: COLORS.LIGHT.PAPER,
            },
          }),
    },
  });
}
