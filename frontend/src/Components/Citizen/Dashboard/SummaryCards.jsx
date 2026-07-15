import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const cards = [
  {
    title: "Total",
    value: 15,
    icon: <AssignmentIcon color="primary" />,
  },
  {
    title: "Pending",
    value: 4,
    icon: <PendingActionsIcon color="warning" />,
  },
  {
    title: "In Progress",
    value: 6,
    icon: <EngineeringIcon color="info" />,
  },
  {
    title: "Resolved",
    value: 5,
    icon: <CheckCircleIcon color="success" />,
  },
];
function SummaryCards() {
  return (
    <Grid container spacing={3} mb={4}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.title}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              textAlign: "center",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            {card.icon}

            <Typography
              variant="h4"
              mt={2}
              fontWeight="bold"
            >
              {card.value}
            </Typography>

            <Typography>
              {card.title}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default SummaryCards;