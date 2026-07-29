import {
  Paper,
  Typography,
  Stack,
} from "@mui/material";

import ApartmentIcon from "@mui/icons-material/Apartment";

function AIDepartmentCard({ department }) {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <ApartmentIcon
          color="primary"
          sx={{
            fontSize: 45,
          }}
        />

        <div>
          <Typography
            color="text.secondary"
          >
            Assigned Department
          </Typography>

          <Typography
            variant="h6"
            fontWeight="bold"
          >
            {department}
          </Typography>
        </div>
      </Stack>
    </Paper>
  );
}

export default AIDepartmentCard;