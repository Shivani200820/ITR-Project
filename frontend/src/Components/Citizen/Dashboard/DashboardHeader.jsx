import { Box, Typography, Avatar, Stack } from "@mui/material";

function DashboardHeader() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg,#1976D2,#42A5F5)",
        color: "#fff",
        borderRadius: 4,
        p: 3,
        mb: 3,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Welcome Back 👋
          </Typography>

          <Typography mt={1}>
            Manage your complaints and track their progress.
          </Typography>
        </Box>

        <Avatar
          sx={{
            width: 70,
            height: 70,
            bgcolor: "#fff",
            color: "#1976D2",
            fontWeight: "bold",
            fontSize: 28,
          }}
        >
          G
        </Avatar>
      </Stack>
    </Box>
  );
}

export default DashboardHeader;