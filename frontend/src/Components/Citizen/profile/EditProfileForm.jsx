import {
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";

function EditProfileForm({ close }) {
  return (
    <>
      <Typography
        variant="h6"
        mb={3}
      >
        Edit Profile
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Full Name"
          defaultValue="Gauri Chikhale"
          fullWidth
        />

        <TextField
          label="Email"
          defaultValue="gauri@gmail.com"
          fullWidth
        />

        <TextField
          label="Mobile Number"
          defaultValue="9876543210"
          fullWidth
        />

        <Button
          variant="contained"
          onClick={close}
        >
          Save Changes
        </Button>
      </Stack>
    </>
  );
}

export default EditProfileForm;