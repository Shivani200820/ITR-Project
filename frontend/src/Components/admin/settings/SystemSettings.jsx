import {
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  Stack
} from "@mui/material";


function SystemSettings() {


  return (

    <Paper

      sx={{

        p: 4,

        borderRadius: 4

      }}

    >


      <Typography

        variant="h6"

        fontWeight="bold"

        mb={3}

      >

        ⚙️ System Settings

      </Typography>




      <Stack

        spacing={2}

      >



        <FormControlLabel

          control={<Switch defaultChecked />}

          label="Enable AI Complaint Analysis"

        />



        <FormControlLabel

          control={<Switch defaultChecked />}

          label="Enable Citizen Notifications"

        />



        <FormControlLabel

          control={<Switch />}

          label="Maintenance Mode"

        />



      </Stack>



    </Paper>

  );

}


export default SystemSettings;