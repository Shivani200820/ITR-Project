import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack
} from "@mui/material";


function ProfileForm() {

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
        Admin Profile
      </Typography>


      <Stack spacing={2}>

        <TextField
          label="Name"
          fullWidth
        />


        <TextField
          label="Email"
          fullWidth
        />


        <Button
          variant="contained"
        >
          Save Profile
        </Button>


      </Stack>


    </Paper>

  );

}


export default ProfileForm;