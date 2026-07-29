import {
  Button,
  Paper,
  Typography
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";


function ResolutionUpload() {


  return (

    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        textAlign: "center"
      }}
    >


      <Typography
        fontWeight="bold"
        mb={2}
      >
        Upload Resolution Image
      </Typography>



      <Button

        variant="outlined"

        component="label"

        startIcon={<CloudUploadIcon />}

      >

        Upload Image


        <input

          hidden

          type="file"

        />


      </Button>



    </Paper>

  );

}


export default ResolutionUpload;