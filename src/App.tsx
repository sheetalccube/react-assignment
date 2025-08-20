import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header";

export default function App() {
  return (
    <>
          <Header
      />

      {/* <Header
        mode={mode}
        onToggleTheme={() => setMode(mode === "light" ? "dark" : "light")}
      /> */}
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
}
