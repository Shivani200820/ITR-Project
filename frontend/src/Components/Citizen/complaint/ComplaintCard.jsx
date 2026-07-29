import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function ComplaintCard({ complaint }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>

        <Typography variant="h6" fontWeight="bold">
          {complaint.title}
        </Typography>

        <Typography mt={1}>
          {complaint.description}
        </Typography>

        <Stack direction="row" spacing={2} mt={2}>
          <Chip
            label={complaint.status}
            color={
              complaint.status === "Resolved"
                ? "success"
                : complaint.status === "In Progress"
                ? "warning"
                : "default"
            }
          />

          <Chip
            label={complaint.priority}
            color={
              complaint.priority === "High"
                ? "error"
                : complaint.priority === "Medium"
                ? "warning"
                : "success"
            }
          />
        </Stack>

        <Button
          sx={{ mt: 3 }}
          variant="contained"
          onClick={() =>
            navigate(`/citizen/complaints/${complaint.id}`)
          }
        >
          View Details
        </Button>

      </CardContent>
    </Card>
  );
}

export default ComplaintCard;