import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        mt: 10,
        background:
          "linear-gradient(135deg,#0D47A1,#1565C0,#00ACC1)",
        color: "#fff",
        pt: 8,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Logo */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
            >
              CivicAI
            </Typography>

            <Typography
              sx={{
                opacity: 0.9,
                lineHeight: 1.8,
              }}
            >
              AI Powered Smart Civic Complaint &
              Resolution Platform that connects
              citizens with government departments
              for faster issue resolution.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Quick Links
            </Typography>

            <Stack spacing={1.2}>
              <Link href="#home" color="inherit" underline="hover">
                Home
              </Link>

              <Link href="#about" color="inherit" underline="hover">
                About
              </Link>

              <Link href="#features" color="inherit" underline="hover">
                Features
              </Link>

              <Link
                href="#departments"
                color="inherit"
                underline="hover"
              >
                Departments
              </Link>

              <Link href="#contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Contact
            </Typography>

            <Typography mb={1}>
              📧 support@civicai.com
            </Typography>

            <Typography mb={1}>
              📞 +91 98765 43210
            </Typography>

            <Typography>
              📍 Pune, Maharashtra, India
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              mt={3}
            >
              <IconButton
                sx={{
                  color: "#fff",
                  "&:hover": {
                    background: "rgba(255,255,255,.15)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: "#fff",
                  "&:hover": {
                    background: "rgba(255,255,255,.15)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: "#fff",
                  "&:hover": {
                    background: "rgba(255,255,255,.15)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: "#fff",
                  "&:hover": {
                    background: "rgba(255,255,255,.15)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2">
            © 2026 CivicAI. All Rights Reserved.
          </Typography>

          <IconButton
            onClick={scrollTop}
            sx={{
              background: "#fff",
              color: "primary.main",

              "&:hover": {
                background: "#E3F2FD",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;