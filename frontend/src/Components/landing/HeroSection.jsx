import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Paper,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import heroImage from "../../assets/images/hero.png";

function HeroSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg,#E3F2FD,#FFFFFF)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">

          {/* Left Side */}

          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="primary"
            >
              AI Powered Smart Civic Complaint Platform
            </Typography>

            <Typography
              mt={3}
              color="text.secondary"
              fontSize={20}
            >
              Register complaints instantly using AI image analysis,
              GPS location, and intelligent department assignment.
              Help make your city smarter and cleaner.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              mt={4}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  "&:hover": {
                    transform: "translateY(-3px)",
                    transition: "0.3s",
                  },
                }}
              >
                Register Complaint
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayCircleIcon />}
                sx={{
                  borderRadius: 3,
                  px: 4,
                }}
              >
                Watch Demo
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              mt={5}
              flexWrap="wrap"
            >
              <Paper sx={{ p: 2 }}>
                AI Image Detection
              </Paper>

              <Paper sx={{ p: 2 }}>
                GPS Tracking
              </Paper>

              <Paper sx={{ p: 2 }}>
                Smart Priority
              </Paper>

              <Paper sx={{ p: 2 }}>
                Live Status
              </Paper>
            </Stack>

          </Grid>

          {/* Right Side */}

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={heroImage}
              alt="Civic AI"
              sx={{
                width: "100%",
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;