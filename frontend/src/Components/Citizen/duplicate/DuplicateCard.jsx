import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";

function DuplicateCard({ complaint }) {
  return (
    <Card sx={{ mb:3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
        >
          {complaint.title}
        </Typography>

        <Typography mt={1}>
          📍 {complaint.location}
        </Typography>

        <Typography>
          📏 {complaint.distance}
        </Typography>

        <Typography>
          👥 {complaint.support} Supporters
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          mt={2}
        >
          <Chip
            label={complaint.priority}
            color="error"
          />

          <Chip
            label={complaint.status}
            color="warning"
          />
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          mt={3}
        >
          <Button
            variant="contained"
          >
            Support Complaint
          </Button>

          <Button
            variant="outlined"
          >
            Create New
          </Button>
        </Stack>

      </CardContent>
    </Card>
  );
}

export default DuplicateCard;