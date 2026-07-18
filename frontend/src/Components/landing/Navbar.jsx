import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

// Navigation Items
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Departments", path: "/departments" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Toolbar>

          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: "#1565C0",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            CivicAI
          </Typography>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: "#374151",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 16,
                  transition: "0.3s",

                  "&:hover": {
                    color: "#1565C0",
                  },
                }}
              >
                {item.name}
              </Typography>
            ))}

            {/* Login */}
            <Typography
              component={Link}
              to="/auth/login/citizen"
              sx={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,

                "&:hover": {
                  color: "#1565C0",
                },
              }}
            >
              Login
            </Typography>

            {/* Signup */}
            <Typography
              component={Link}
              to="/auth/register"
              sx={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,

                "&:hover": {
                  color: "#1565C0",
                },
              }}
            >
              Signup
            </Typography>
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={toggleDrawer}
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <Box sx={{ width: 250 }}>
          <List>

            {navItems.map((item) => (
              <ListItem
                key={item.name}
                disablePadding
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={toggleDrawer}
                  sx={{
                    justifyContent: "center",
                    py: 1.5,
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      sx: {
                        textAlign: "center",
                        fontWeight: 600,
                        color: "#374151",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Login */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/auth/login/citizen"
                onClick={toggleDrawer}
                sx={{
                  justifyContent: "center",
                }}
              >
                <ListItemText
                  primary="Login"
                  primaryTypographyProps={{
                    sx: {
                      textAlign: "center",
                      fontWeight: 600,
                      color: "#374151",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Signup */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/auth/register"
                onClick={toggleDrawer}
                sx={{
                  justifyContent: "center",
                }}
              >
                <ListItemText
                  primary="Signup"
                  primaryTypographyProps={{
                    sx: {
                      textAlign: "center",
                      fontWeight: 600,
                      color: "#374151",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;