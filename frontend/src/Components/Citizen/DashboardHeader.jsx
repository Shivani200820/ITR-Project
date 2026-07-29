import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Stack,
  Box,
} from "@mui/material";


import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";


function DashboardHeader() {


  return (

    <AppBar

      position="static"

      color="inherit"

      elevation={1}

      sx={{

        bgcolor:"#ffffff"

      }}

    >


      <Toolbar>


        <Box

          sx={{

            flexGrow:1

          }}

        >


          <Typography

            variant="h6"

            fontWeight="bold"

            color="primary"

          >

            CivicAI


          </Typography>


          <Typography

            variant="body2"

            color="text.secondary"

          >

            Citizen Dashboard


          </Typography>


        </Box>



        <Stack

          direction="row"

          spacing={2}

          alignItems="center"

        >



          <IconButton>


            <Badge

              badgeContent={3}

              color="error"

            >

              <NotificationsIcon />

            </Badge>


          </IconButton>




          <Avatar

            sx={{

              bgcolor:"primary.main"

            }}

          >

            <PersonIcon />

          </Avatar>



        </Stack>



      </Toolbar>


    </AppBar>


  );

}


export default DashboardHeader;