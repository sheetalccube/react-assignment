import { Outlet } from "react-router-dom";
import { Box, Typography, Container, Paper } from "@mui/material";

function Home() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom color="primary">
            Welcome to the Home Page
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
            This is the main landing page of our React application. Use the
            navigation bar above to explore different sections like Todos,
            Users, Forms, and more.
            <br />
            {isLoggedIn
              ? "You are currently logged in. Enjoy browsing your content!"
              : "You are not logged in. Please log in to access protected pages."}
          </Typography>
        </Paper>

        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Home;
