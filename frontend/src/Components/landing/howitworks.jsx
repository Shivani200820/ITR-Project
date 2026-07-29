import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const steps = [
  {
    title: "1. Submit Complaint",

    description:
      "Upload image, add voice/text details and capture your location easily.",

    icon: <UploadFileIcon fontSize="large" color="primary" />,
  },

  {
    title: "2. AI Analysis",

    description:
      "AI detects the issue, assigns department and calculates priority.",

    icon: <PsychologyIcon fontSize="large" color="secondary" />,
  },

  {
    title: "3. Resolution Tracking",

    description:
      "Track complaint progress until the issue is resolved.",

    icon: <CheckCircleIcon fontSize="large" color="success" />,
  },
];


function HowItWorks() {

  return (

    <Box
      sx={{
        py:10,
      }}
    >

      <Container maxWidth="lg">


        <Typography
          align="center"
          color="primary"
          fontWeight="bold"
        >
          HOW IT WORKS
        </Typography>



        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mt={2}
          mb={7}
        >
          Simple Process, Smart Resolution
        </Typography>



        <Grid
          container
          spacing={4}
        >


          {steps.map((step)=>(


            <Grid

              key={step.title}

              size={{
                xs:12,
                md:4
              }}

            >


              <Paper

                elevation={4}

                sx={{

                  p:4,

                  height:"100%",

                  textAlign:"center",

                  borderRadius:4,

                  transition:"0.3s",

                  "&:hover":{

                    transform:"translateY(-8px)"

                  }

                }}

              >



                <Stack

                  spacing={2}

                  sx={{

                    alignItems:"center"

                  }}

                >



                  {step.icon}



                  <Typography

                    variant="h6"

                    fontWeight="bold"

                  >

                    {step.title}

                  </Typography>




                  <Typography

                    color="text.secondary"

                  >

                    {step.description}

                  </Typography>



                </Stack>



              </Paper>



            </Grid>



          ))}



        </Grid>


      </Container>


    </Box>


  );

}


export default HowItWorks;