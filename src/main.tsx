import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";
import { getTheme } from "@/Styles/Theme";
import App from "@/App";
import Home from "./Pages/home";

const LoginPage = React.lazy(() => import("@/Pages/auth/LoginPage"));
const SignupPage = React.lazy(() => import("@/Pages/auth/Signup"));
const Todos = React.lazy(() => import("@/Pages/Todos"));

import withPublic from "@/Hoc/WithPublic";
import withAuth from "@/Hoc/WithAuth";

function MainApp() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const PublicLogin = withPublic(LoginPage);
  const PublicSignup = withPublic(SignupPage);
  const ProtectedTodos = withAuth(Todos);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            sx={{ mb: 2 }}
          >
            Toggle {mode === "light" ? "Dark" : "Light"} Mode
          </Button>

          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="home" element={<Home />} />
                <Route path="login" element={<PublicLogin />} />
                <Route path="signup" element={<PublicSignup />} />
                <Route path="todos" element={<ProtectedTodos />} />
                <Route path="*" element={<div>404 - Page Not Found</div>} />
              </Route>
            </Routes>
          </React.Suspense>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
export default MainApp;
