import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          color="primary"
          fontWeight="bold"
        >
          404
        </Typography>

        <Typography
          variant="h4"
          mt={2}
          fontWeight="bold"
        >
          Page Not Found
        </Typography>

        <Typography
          color="text.secondary"
          mt={2}
          mb={4}
        >
          Sorry! The page you are looking for doesn't exist.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
        >
          Go Home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;