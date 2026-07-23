import {
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";

const activities = [
  "New officer registered",
  "Complaint #1023 resolved",
  "Road department updated",
  "New citizen account created",
];

function RecentActivities() {
  return (
    <Paper
      elevation={0}
      sx={{ p: 3, borderRadius: 4 }}
    >
      <Typography
        variant="h6"
        mb={2}
      >
        Recent Activities
      </Typography>

      <List>
        {activities.map((activity, index) => (
          <div key={index}>
            <ListItem>{activity}</ListItem>
            {index !== activities.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default RecentActivities;