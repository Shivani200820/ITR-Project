import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
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

const navItems = [
  "Home",
  "About",
  "Features",
  "Departments",
  "Contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: "#ffffff",
        }}
      >
        <Toolbar>

          {/* Logo */}

          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              color: "#1565C0",
              fontWeight: "bold",
            }}
          >
            CivicAI
          </Typography>

          {/* Desktop Menu */}

          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                sx={{
                  color: "#374151",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 16,
                  transition: "color 0.2s ease",
                  '&:hover': {
                    color: "#1565C0",
                  },
                }}
              >
                {item}
              </Typography>
            ))}

            <Typography
              component={Link}
              to="/auth/login/citizen"
              sx={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                '&:hover': {
                  color: "#1565C0",
                },
              }}
            >
              Login
            </Typography>

            <Typography
              component={Link}
              to="/auth/register"
              sx={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                '&:hover': {
                  color: "#1565C0",
                },
              }}
            >
              Signup
            </Typography>
          </Stack>

          {/* Mobile Icon */}

          <IconButton
            onClick={toggleDrawer}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Drawer */}

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <Box
          sx={{
            width: 250,
          }}
        >
          <List>

            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  sx={{
                    justifyContent: "center",
                    paddingY: 1.5,
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: "#374151",
                        fontWeight: 600,
                        textAlign: "center",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/auth/login/citizen"
                sx={{ justifyContent: "center" }}
              >
                <ListItemText
                  primary="Login"
                  primaryTypographyProps={{
                    sx: {
                      color: "#374151",
                      fontWeight: 600,
                      textAlign: "center",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/auth/register"
                sx={{ justifyContent: "center" }}
              >
                <ListItemText
                  primary="Signup"
                  primaryTypographyProps={{
                    sx: {
                      color: "#374151",
                      fontWeight: 600,
                      textAlign: "center",
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