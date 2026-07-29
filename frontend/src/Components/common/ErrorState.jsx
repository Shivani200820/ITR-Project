import { Box, Button, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ErrorState({
  title = "Something went wrong!",
  message = "Unable to load data. Please try again.",
  buttonText = "Retry",
  onRetry,
}) {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      <ErrorOutlineIcon
        color="error"
        sx={{
          fontSize: 80,
          mb: 2,
        }}
      />

      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          maxWidth: 450,
          mb: 4,
        }}
      >
        {message}
      </Typography>

      <Button
        variant="contained"
        onClick={onRetry}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default ErrorState;