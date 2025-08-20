import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";

export default function App() {
  return (
    <>
      <Header />

      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
}
