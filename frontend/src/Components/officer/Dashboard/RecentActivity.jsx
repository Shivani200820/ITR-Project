import { Paper, Typography, List, ListItem } from "@mui/material";

function RecentActivity() {
  const activities = [
    "Complaint #101 Assigned",
    "Complaint #92 Resolved",
    "Complaint #88 Updated",
    "Complaint #75 Accepted",
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        mb={2}
      >
        Recent Activity
      </Typography>

      <List>
        {activities.map((item) => (
          <ListItem key={item}>
            {item}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default RecentActivity;