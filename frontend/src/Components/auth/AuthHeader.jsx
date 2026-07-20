import {
  Box,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";


function AuthHeader({ role }) {


  const displayRole =
    role?.charAt(0).toUpperCase() + role?.slice(1);



  return (

    <Box
      textAlign="center"
      mb={4}
    >


      <Avatar

        sx={{
          width:80,
          height:80,
          margin:"auto",
          mb:2,

          background:
            "linear-gradient(135deg,#1565C0,#42A5F5)",
        }}

      >

        <SecurityIcon
          sx={{
            fontSize:45
          }}
        />

      </Avatar>



      <Typography

        variant="h4"

        fontWeight="bold"

        color="primary"

      >

        CivicAI

      </Typography>



      <Typography

        variant="h6"

        mt={1}

        fontWeight={600}

      >

        Login as {displayRole}

      </Typography>



      <Typography

        color="text.secondary"

        mt={1}

      >

        Sign in to continue to your smart civic platform

      </Typography>


    </Box>

  );
}


export default AuthHeader;