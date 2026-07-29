import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack
} from "@mui/material";


function ChangePassword() {


  return (

    <Paper
      sx={{
        p: 3,
        borderRadius: 4
      }}
    >

      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
      >
        Change Password
      </Typography>


      <Stack spacing={2}>

        <TextField
          label="Current Password"
          type="password"
        />


        <TextField
          label="New Password"
          type="password"
        />


        <TextField
          label="Confirm Password"
          type="password"
        />


        <Button
          variant="contained"
        >
          Update Password
        </Button>


      </Stack>


    </Paper>

  );

}


export default ChangePassword;