import { Box, Typography, Paper } from "@mui/material";

import ComplaintFilters from "../../components/officer/complaints/ComplaintFilters";
import ComplaintTable from "../../components/officer/complaints/ComplaintTable";

function ComplaintManagement() {
  return (
    <Box sx={{ p: 3 }}>

      {/* Page Title */}

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Complaint Management
      </Typography>

      {/* Filters */}

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 3,
          border: "1px solid #E5E7EB",
        }}
      >
        <ComplaintFilters />
      </Paper>

      {/* Complaint Table */}

      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #E5E7EB",
          overflow: "hidden",
        }}
      >
        <ComplaintTable />
      </Paper>

    </Box>
  );
}

export default ComplaintManagement;