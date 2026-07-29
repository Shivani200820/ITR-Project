import {
  Paper,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function WelcomeCard() {
  const navigate = useNavigate();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: 4,
        color: "white",
        background: "linear-gradient(135deg,#1565C0,#42A5F5)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {greeting} 👋
        </Typography>

        <Typography
          variant="h6"
          mt={2}
          fontWeight={500}
        >
          Welcome to CivicAI Smart Complaint Platform
        </Typography>

        <Typography
          mt={1}
          sx={{
            opacity: 0.9,
          }}
        >
          Report civic issues using AI image detection,
          GPS tracking and smart department assignment.
        </Typography>

        <Stack
          direction="row"
          mt={4}
        >
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            onClick={() =>
              navigate("/citizen/register-complaint")
            }
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1.2,
              fontWeight: "bold",
            }}
          >
            Register Complaint
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default WelcomeCard;