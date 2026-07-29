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

import ThemeToggle from "../common/ThemeToggle";


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


  const [open, setOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const navigate = useNavigate();



  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

  }, []);



  const toggleDrawer = () => {

    setOpen(!open);

  };



  const logout = () => {

    localStorage.removeItem("token");

    setIsLoggedIn(false);

    navigate("/");

  };



  return (

    <>


      <AppBar

        position="fixed"

        elevation={3}

        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          borderRadius: "0 0 20px 20px",
        }}

      >


        <Toolbar>


          {/* Logo */}

          <Typography

            component={Link}

            to="/"

            variant="h5"

            fontWeight="bold"

            sx={{

              flexGrow: 1,

              textDecoration: "none",

              color: "primary.main"
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


                item.path.startsWith("#")


                  ?


                  <Typography

                    key={item.name}

                    component="a"

                    href={item.path}

                    sx={{

                      textDecoration: "none",

                      color: "text.primary",
                      fontWeight: 600,

                      cursor: "pointer",

                      "&:hover": {

                        color: "primary.main"
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
                      color: "text.primary",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "0.3s",

                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >

                    {item.name}

                  </Typography>


              ))

            }



            {/* Theme Toggle */}

            <ThemeToggle />



            

              {
              !isLoggedIn ? (
            <>
              {/* Sign In */}
              <Button
                variant="outlined"
                onClick={() => navigate("/auth/login/citizen")}
                sx={{
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Sign In
              </Button>

              {/* Register Complaint */}
              <Button
                variant="contained"
                onClick={() => navigate("/auth/register/citizen")}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Register Complaint
              </Button>
            </>
            ) : (
            <>
              {/* Sign Out */}
              <Button
                variant="outlined"
                color="error"
                onClick={logout}
                sx={{
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Sign Out
              </Button>

              {/* Register Complaint */}
              <Button
                variant="contained"
                onClick={() => navigate("/citizen/register-complaint")}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Register Complaint
              </Button>
            </>
            )



            

            }



          </Stack>





          {/* Mobile Menu */}


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

        onClose={toggleDrawer}

      >


        <Box

          width={260}

        >


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


                    onClick={toggleDrawer}

                  >


                    <ListItemText

                      primary={item.name}

                    />


                  </ListItemButton>


                </ListItem>


              ))

            }



          </List>




          <Box

            p={2}

          >


            <Stack spacing={2}>


              <ThemeToggle />




              {

                !isLoggedIn &&

                <>


                  <Button

                    fullWidth

                    variant="outlined"

                    onClick={() => navigate("/auth/login/citizen")}

                  >

                    Login

                  </Button>



                  <Button

                    fullWidth

                    variant="text"

                    onClick={() => navigate("/auth/register")}

                  >

                    Signup

                  </Button>




                  <Button

                    fullWidth

                    variant="contained"

                    onClick={() => navigate("/auth/register/citizen")}

                  >

                    Register Complaint

                  </Button>


                </>


              }



              {

                isLoggedIn &&

                <Button

                  fullWidth

                  color="error"

                  variant="contained"

                  onClick={logout}

                >

                  Logout

                </Button>

              }



            </Stack>


          </Box>


        </Box>


      </Drawer>



    </>

  );

}


export default Navbar;