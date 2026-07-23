import { Box, Paper, Typography } from "@mui/material";

import UserFilters from "../../components/admin/users/UserFilters";
import UserTable from "../../components/admin/users/UserTable";

function UserManagement() {
  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        User Management
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 4,
        }}
      >
        <UserFilters />
      </Paper>

      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <UserTable />
      </Paper>

    </Box>
  );
}

export default UserManagement;