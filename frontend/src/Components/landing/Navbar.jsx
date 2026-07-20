import { useState, useEffect } from "react";
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
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Link, useNavigate } from "react-router-dom";


const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Features",
    path: "#features",
  },
  {
    name: "Departments",
    path: "#departments",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];


function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

  }, []);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();


  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (

    <>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={3}
        sx={{
          borderRadius: "0 0 20px 20px",
          background: "#ffffff"
        }}
      >

        <Toolbar>


          {/* Logo */}

          <Typography

            component={Link}

            to="/"

            variant="h5"

            fontWeight="bold"

            color="primary"

            sx={{
              flexGrow: 1,
              textDecoration: "none"
            }}

          >
            CivicAI

          </Typography>



          {/* Desktop Menu */}

          <Stack

            direction="row"

            spacing={3}

            alignItems="center"

            sx={{
              display: {
                xs: "none",
                md: "flex"
              }
            }}

          >


            {
              navItems.map((item) => (

                item.path.startsWith("#") ?


                  <Typography

                    key={item.name}

                    component="a"

                    href={item.path}

                    sx={{

                      textDecoration: "none",

                      color: "#374151",

                      fontWeight: 600,

                      cursor: "pointer",

                      "&:hover": {
                        color: "#1565C0"
                      }

                    }}

                  >

                    {item.name}

                  </Typography>


                  :


                  <Typography

                    key={item.name}

                    component={Link}

                    to={item.path}

                    sx={{

                      textDecoration: "none",

                      color: "#374151",

                      fontWeight: 600,

                      "&:hover": {
                        color: "#1565C0"
                      }

                    }}

                  >

                    {item.name}

                  </Typography>


              ))
            }



            {/* Login Button */}


            {!isLoggedIn ? (
              <>
                {/* Login Button */}
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/auth/login/citizen")}
                >
                  Login
                </Button>

                {/* Register Complaint Button */}
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 3,
                    px: 3,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                  onClick={() => navigate("/auth/register/citizen")}
                >
                  Register Complaint
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="error"
                sx={{
                  borderRadius: 3,
                  px: 3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLoggedIn(false);
                  navigate("/");
                }}
              >
                Logout
              </Button>
            )}

          </Stack>




          {/* Mobile Menu Button */}


          <IconButton

            onClick={toggleDrawer}

            sx={{

              display: {
                xs: "block",
                md: "none"
              }

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

        onClose={() => setOpen(false)}

      >


        <Box width={250}>


          <List>


            {
              navItems.map((item) => (


                <ListItem

                  key={item.name}

                  disablePadding

                >


                  <ListItemButton


                    component={

                      item.path.startsWith("#")

                        ?

                        "a"

                        :

                        Link

                    }


                    href={

                      item.path.startsWith("#")

                        ?

                        item.path

                        :

                        undefined

                    }


                    to={

                      item.path.startsWith("#")

                        ?

                        undefined

                        :

                        item.path

                    }


                    onClick={() => setOpen(false)}


                  >


                    <ListItemText

                      primary={item.name}

                    />


                  </ListItemButton>


                </ListItem>


              ))
            }


          </List>


          <Box p={2}>


            <Button

              fullWidth

              variant="contained"

              onClick={() => navigate("/auth/register/citizen")}

            >

              Register Complaint

            </Button>


          </Box>


        </Box>


      </Drawer>


    </>

  );
}


export default Navbar;