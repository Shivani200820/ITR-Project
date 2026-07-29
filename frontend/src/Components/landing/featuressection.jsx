import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TimelineIcon from "@mui/icons-material/Timeline";
import MicIcon from "@mui/icons-material/Mic";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import AnimatedSection from "../common/AnimatedSection";


const features = [
  {
    title: "AI Detection",
    description:
      "Identifies issues instantly from uploaded images and reports.",
    icon: <AutoAwesomeIcon color="primary" fontSize="large" />,
  },

  {
    title: "Smart Complaint",
    description:
      "Organizes complaints intelligently for faster review and resolution.",
    icon: <SmartToyIcon color="secondary" fontSize="large" />,
  },

  {
    title: "Live Tracking",
    description:
      "Follows complaint progress in real time from submission to closure.",
    icon: <TimelineIcon color="info" fontSize="large" />,
  },

  {
    title: "Voice Complaint",
    description:
      "Allows citizens to report issues quickly using voice input.",
    icon: <MicIcon color="success" fontSize="large" />,
  },

  {
    title: "GPS Location",
    description:
      "Captures precise geographic details for faster field response.",
    icon: <LocationOnIcon color="error" fontSize="large" />,
  },

  {
    title: "Notifications",
    description:
      "Sends timely updates so users stay informed at every step.",
    icon: <NotificationsActiveIcon color="warning" fontSize="large" />,
  },
];



function FeaturesSection() {


  return (

    <Box

      component="section"

      id="features"

      sx={{

        background:"#f8fafc",

        py:8,

      }}

    >


      <Box

        sx={{

          maxWidth:"1200px",

          mx:"auto",

          px:3,

        }}

      >



        {/* Header */}


        <Box

          textAlign="center"

          mb={6}

        >

          <Typography

            variant="overline"

            color="primary"

            fontWeight={700}

            letterSpacing={3}

          >

            FEATURES

          </Typography>



          <Typography

            variant="h3"

            fontWeight={700}

            mt={2}

          >

            Built to make civic complaint handling smarter

          </Typography>



          <Typography

            color="text.secondary"

            mt={2}

          >

            From AI-powered analysis to live updates, every feature is designed
            to simplify reporting and improve service delivery.

          </Typography>


        </Box>





        {/* Cards */}


        <Box

          sx={{

            display:"grid",

            gridTemplateColumns:{

              xs:"1fr",

              md:"repeat(2,1fr)",

              xl:"repeat(3,1fr)",

            },

            gap:3,

          }}

        >


          {

            features.map((feature)=>(


              <AnimatedSection

                key={feature.title}

              >


                <Card

                  sx={{

                    height:"100%",

                    borderRadius:4,

                    border:"1px solid #e2e8f0",

                    transition:"0.3s",

                    "&:hover":{

                      transform:"translateY(-8px)",

                      boxShadow:6,

                    },

                  }}

                >



                  <CardContent>


                    <Stack spacing={2}>


                      <Box

                        sx={{

                          width:50,

                          height:50,

                          display:"flex",

                          alignItems:"center",

                          justifyContent:"center",

                          borderRadius:3,

                          background:"#E3F2FD",

                        }}

                      >

                        {feature.icon}


                      </Box>





                      <Typography

                        variant="h6"

                        fontWeight="bold"

                      >

                        {feature.title}

                      </Typography>




                      <Typography

                        color="text.secondary"

                      >

                        {feature.description}

                      </Typography>



                    </Stack>


                  </CardContent>


                </Card>


              </AnimatedSection>


            ))

          }



        </Box>


      </Box>


    </Box>


  );

}


export default FeaturesSection;