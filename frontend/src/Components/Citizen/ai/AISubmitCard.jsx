import {
  Paper,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

function AISubmitCard() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
      >
        Everything looks correct?
      </Typography>

      <Typography
        mt={1}
        color="text.secondary"
      >
        Review the AI result before
        submitting your complaint.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        mt={3}
      >
        <Button
          variant="outlined"
        >
          Edit
        </Button>

        <Button
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit Complaint
        </Button>
      </Stack>
    </Paper>
  );
}

export default AISubmitCard;