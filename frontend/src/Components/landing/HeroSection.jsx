import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import HeroImage from "../../assets/images/hero.svg";

import PsychologyIcon from "@mui/icons-material/Psychology";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VerifiedIcon from "@mui/icons-material/Verified";

import { useNavigate } from "react-router-dom";


function HeroSection() {

  const navigate = useNavigate();


  return (
    <>

      {/* ================= HERO ================= */}

      <Box
        sx={{
          background:
            "linear-gradient(135deg,#E8F1FF 0%,#F8FBFF 100%)",

          minHeight: "90vh",

          display: "flex",

          alignItems: "center",

          py: 10,

          overflow: "hidden",
        }}
      >

        <Container maxWidth="xl">

          <Grid container spacing={6} alignItems="center">


            {/* LEFT */}

            <Grid size={{ xs:12, md:6 }}>


              <Typography

                variant="h2"

                fontWeight={800}

                sx={{

                  lineHeight:1.2,

                  mb:3,

                  fontSize:{

                    xs:"2.4rem",

                    md:"3.8rem",

                  }

                }}

              >

                AI Powered

                <br />


                <Box

                  component="span"

                  sx={{

                    background:
                    "linear-gradient(90deg,#1565C0,#00ACC1)",

                    WebkitBackgroundClip:"text",

                    WebkitTextFillColor:"transparent",

                  }}

                >

                  Smart Civic Complaint

                  <br />

                  Resolution Platform


                </Box>


              </Typography>



              <Typography

                sx={{

                  color:"text.secondary",

                  fontSize:14,

                  mb:4,

                  maxWidth:560,

                }}

              >

                Report civic issues instantly using AI-powered image
                recognition, GPS location tracking, intelligent
                complaint routing and live complaint tracking.

              </Typography>




              {/* CHIPS */}


              <Stack

                direction={{

                  xs:"column",

                  sm:"row",

                }}

                spacing={2}

                sx={{

                  mt:3,

                  alignItems:{

                    xs:"center",

                    sm:"flex-start",

                  }

                }}

              >


                <Chip

                  clickable

                  icon={<PsychologyIcon />}

                  label="AI Detection"

                  color="primary"

                  onClick={()=>navigate("/citizen/ai-review")}

                />



                <Chip

                  clickable

                  icon={<LocationOnIcon />}

                  label="GPS Enabled"

                  color="success"

                  onClick={()=>navigate("/citizen/map")}

                />



                <Chip

                  clickable

                  icon={<TrackChangesIcon />}

                  label="Smart Priority"

                  color="warning"

                  onClick={()=>navigate("/citizen/register-complaint")}

                />



                <Chip

                  clickable

                  icon={<VerifiedIcon />}

                  label="Live Tracking"

                  color="secondary"

                  onClick={()=>navigate("/citizen/my-complaints")}

                />


              </Stack>


            </Grid>





            {/* RIGHT IMAGE */}


            <Grid

              size={{xs:12,md:6}}

              sx={{

                position:"relative",

                display:"flex",

                justifyContent:"center",

                alignItems:"center",

                mt:{

                  xs:5,

                  md:0,

                },

                height:{

                  xs:"350px",

                  md:"520px",

                }

              }}

            >


              <motion.img

                src={HeroImage}

                alt="Hero"

                animate={{

                  y:[0,-15,0],

                }}

                transition={{

                  duration:4,

                  repeat:Infinity,

                }}

                style={{

                  width:"100%",

                  maxWidth:"520px",

                  height:"auto",

                  objectFit:"contain",

                }}

              />





              {/* Floating Cards */}



              <Paper

                sx={{

                  position:"absolute",

                  top:{xs:10,md:40},

                  left:{xs:10,md:0},

                  px:{xs:1.5,md:3},

                  py:{xs:1,md:2},

                  borderRadius:5,

                  backdropFilter:"blur(12px)",

                  background:"rgba(255,255,255,.75)",

                  boxShadow:"0 15px 40px rgba(0,0,0,.08)",

                }}

              >

                🤖 AI Detection

              </Paper>




              <Paper

                sx={{

                  position:"absolute",

                  top:{xs:100,md:170},

                  right:{xs:10,md:0},

                  px:{xs:1.5,md:3},

                  py:{xs:1,md:2},

                  borderRadius:5,

                  backdropFilter:"blur(12px)",

                  background:"rgba(255,255,255,.75)",

                  boxShadow:"0 15px 40px rgba(0,0,0,.08)",

                }}

              >

                📍 GPS Enabled

              </Paper>




              <Paper

                sx={{

                  position:"absolute",

                  bottom:{xs:20,md:40},

                  left:{xs:10,md:30},

                  px:{xs:1.5,md:3},

                  py:{xs:1,md:2},

                  borderRadius:5,

                  backdropFilter:"blur(12px)",

                  background:"rgba(255,255,255,.75)",

                  boxShadow:"0 15px 40px rgba(0,0,0,.08)",

                }}

              >

                ⚡ Smart Priority

              </Paper>





              <Paper

                sx={{

                  position:"absolute",

                  bottom:{xs:90,md:140},

                  right:{xs:10,md:20},

                  px:{xs:1.5,md:3},

                  py:{xs:1,md:2},

                  borderRadius:5,

                  backdropFilter:"blur(12px)",

                  background:"rgba(255,255,255,.75)",

                  boxShadow:"0 15px 40px rgba(0,0,0,.08)",

                }}

              >

                ✅ Live Tracking

              </Paper>



            </Grid>


          </Grid>


        </Container>


      </Box>


    </>
  );

}


export default HeroSection;