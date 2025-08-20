import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

interface HeaderProps {
  mode: "light" | "dark";
  onToggleTheme: () => void;
}
function Header({ mode, onToggleTheme }: HeaderProps) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = [
    { label: "Home", path: "/", end: true },
    { label: "Todos", path: "/todos" },
  ];

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ gap: 3 }}>
          {navItems.map(({ label, path, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              style={({ isActive }) => ({
                color: "inherit",
                textDecoration: "none",
                fontWeight: isActive ? 700 : 500,
                borderBottom: isActive ? "2px solid yellow" : "none",
                paddingBottom: "2px",
              })}
            >
              {label}
            </NavLink>
          ))}

          <Box flexGrow={1} />

          {/* Toggle Theme Button */}
          <Button
            variant="outlined"
            color="inherit"
            onClick={onToggleTheme}
            sx={{ mr: 2 }}
          >
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>

          {isLoggedIn ? (
            <Button variant="outlined" color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => navigate("/signup")}
              >
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
