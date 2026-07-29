import {
  Typography,
  Chip,
  Stack
} from "@mui/material";

function ComplaintPopup({ complaint }) {
  return (
    <Stack spacing={1} sx={{ width: 220 }}>
      <img
        src={complaint.image}
        alt={complaint.title}
        style={{
          width: "100%",
          borderRadius: 8
        }}
      />

      <Typography fontWeight="bold">
        {complaint.title}
      </Typography>

      <Typography variant="body2">
        Department:
        <br />
        {complaint.department}
      </Typography>

      <Chip
        label={complaint.status}
        color={
          complaint.status === "Resolved"
            ? "success"
            : complaint.status === "Pending"
            ? "warning"
            : "info"
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
  );
}

export default ComplaintPopup;