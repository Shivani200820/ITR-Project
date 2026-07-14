import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#0D47A1",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">

        <Typography
          variant="h5"
          fontWeight="bold"
        >
          CivicAI
        </Typography>

        <Typography mt={2}>
          AI Powered Smart Civic Complaint &
          Resolution Platform
        </Typography>

        <Typography mt={3}>
          © 2026 CivicAI. All Rights Reserved.
        </Typography>

      </Container>
    </Box>
  );
}

export default Footer;