import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
  Grid,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/images/hero.png";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg,#E3F2FD,#FFFFFF)",
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            width: "100%",
            alignItems: "center",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          {/* Left Content */}

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
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
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              mt={4}
              alignItems={{
                xs: "stretch",
                sm: "center",
              }}
            >
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
              sx={{
                flexWrap: "wrap",
                gap: 2,
              }}
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

          {/* Image */}

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Box
              component="img"
              src={heroImage}
              alt="CivicAI"
              sx={{
                width: "100%",
                maxWidth: 500,
                mx: "auto",
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;