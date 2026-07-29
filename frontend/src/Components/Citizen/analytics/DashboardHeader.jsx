import { Typography, Stack } from "@mui/material";

function DashboardHeader() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
      >
        Dashboard Analytics
      </Typography>

      <Typography color="text.secondary">
        AI Powered Smart Civic Platform
      </Typography>
    </Stack>
  );
}

export default DashboardHeader;