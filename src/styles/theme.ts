import { createTheme } from "@mui/material/styles";
import { colors } from "@/styles/colors";

export function getTheme(mode: "light" | "dark") {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
      },
      ...(mode === "dark"
        ? {
            text: {
              primary: colors.dark.textPrimary,
              secondary: colors.dark.textSecondary,
            },
            background: {
              default: colors.dark.background,
              paper: colors.dark.paper,
            },
          }
        : {
            text: {
              primary: colors.light.textPrimary,
              secondary: colors.light.textSecondary,
            },
            background: {
              default: colors.light.background,
              paper: colors.light.paper,
            },
          }),
    },
  });
}
