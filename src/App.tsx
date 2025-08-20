import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header";

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
