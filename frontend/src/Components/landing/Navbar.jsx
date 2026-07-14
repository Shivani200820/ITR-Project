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
            spacing={2}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{
                  color: "#333",
                  fontWeight: 600,
                }}
              >
                {item}
              </Button>
            ))}

            <Button variant="contained">
              Citizen Login
            </Button>

            <Button variant="outlined">
              Officer
            </Button>

            <Button variant="outlined">
              Admin
            </Button>
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
                <ListItemButton>

                  <ListItemText primary={item} />

                </ListItemButton>
              </ListItem>
            ))}

            <ListItem>
              <Button
                fullWidth
                variant="contained"
              >
                Citizen Login
              </Button>
            </ListItem>

            <ListItem>
              <Button
                fullWidth
                variant="outlined"
              >
                Officer Login
              </Button>
            </ListItem>

            <ListItem>
              <Button
                fullWidth
                variant="outlined"
              >
                Admin Login
              </Button>
            </ListItem>

          </List>
        </Box>
      </Drawer>

    </>
  );
}

export default Navbar;