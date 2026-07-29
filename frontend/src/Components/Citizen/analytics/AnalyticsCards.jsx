import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const data = [
  {
    title: "Total Complaints",
    value: 24,
    color: "#1976D2",
  },
  {
    title: "Pending",
    value: 6,
    color: "#F57C00",
  },
  {
    title: "Resolved",
    value: 15,
    color: "#2E7D32",
  },
  {
    title: "In Progress",
    value: 3,
    color: "#8E24AA",
  },
];

function AnalyticsCards() {
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.title}>
          <Card
            sx={{
              borderRadius: 4,
              borderTop: `5px solid ${item.color}`,
            }}
          >
            <CardContent>
              <Typography color="text.secondary">
                {item.title}
              </Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
                mt={2}
              >
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default AnalyticsCards;