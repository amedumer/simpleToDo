import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../context/auth-context";

const ButtonAppBar = () => {
  //!auth.isLoggedIn
  const auth = React.useContext(AuthContext);

  const handleLogin = () => {
    auth.login();
  };

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block", xs: "none" } }}
          >
            SIMPLE FUCKING TO DO PAGE
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "none", xs: "block" } }}
          >
            SFTD
          </Typography>
          <Box sx={{ display: "flex" }}>
            {!auth.isLoggedIn && (
              <Button
                variant="outlined"
                color="inherit"
                sx={{ textTransform: "none" }}
                onClick={handleLogin}
              >
                Login with Google
              </Button>
            )}
            {auth.isLoggedIn && (
              <Typography
                variant="body2"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { sm: "flex", xs: "none" },
                  textTransform: "none",
                  pr: 3,
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                Logged in as {auth.name}
              </Typography>
            )}
            {auth.isLoggedIn && (
              <Button
                variant="outlined"
                color="inherit"
                sx={{ textTransform: "none" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;