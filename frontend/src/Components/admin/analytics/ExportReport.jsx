import {
  Button,
  Stack
} from "@mui/material";


import DownloadIcon from "@mui/icons-material/Download";



function ExportReport() {


  return (

    <Stack

      direction="row"

      spacing={2}

      mt={3}

    >


      <Button

        variant="contained"

        startIcon={<DownloadIcon />}

      >

        Download Report

      </Button>




      <Button

        variant="outlined"

      >

        Export PDF

      </Button>



    </Stack>

  );

}


export default ExportReport;