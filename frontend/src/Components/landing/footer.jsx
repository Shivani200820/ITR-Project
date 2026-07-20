import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Link,
} from "@mui/material";


function Footer() {

  return (

    <Box

      sx={{

        bgcolor:"#0D47A1",

        color:"white",

        py:6,

      }}

    >

      <Container maxWidth="lg">


        <Grid

          container

          spacing={4}

        >



          <Grid

            size={{

              xs:12,

              md:6

            }}

          >


            <Typography

              variant="h4"

              fontWeight="bold"

            >

              CivicAI

            </Typography>



            <Typography

              mt={2}

              sx={{

                opacity:0.9

              }}

            >

              AI Powered Smart Civic Complaint & 
              Resolution Platform

            </Typography>


          </Grid>





          <Grid

            size={{

              xs:12,

              md:6

            }}

          >


            <Stack

              spacing={1}

              sx={{

                alignItems:{

                  xs:"flex-start",

                  md:"flex-end"

                }

              }}

            >


              <Typography

                fontWeight="bold"

              >

                Quick Links

              </Typography>



              <Link

                href="#"

                color="inherit"

                underline="hover"

              >

                Home

              </Link>



              <Link

                href="#"

                color="inherit"

                underline="hover"

              >

                Features

              </Link>



              <Link

                href="#contact"

                color="inherit"

                underline="hover"

              >

                Contact

              </Link>



            </Stack>


          </Grid>



        </Grid>





        <Typography

          sx={{

            mt:5,

            pt:3,

            borderTop:"1px solid rgba(255,255,255,0.3)"

          }}

        >

          © 2026 CivicAI. All Rights Reserved.

        </Typography>



      </Container>


    </Box>


  );

}


export default Footer;