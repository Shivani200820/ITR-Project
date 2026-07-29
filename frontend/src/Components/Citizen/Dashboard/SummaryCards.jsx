import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const cards = [
  {
    title: "Total Complaints",
    value: 15,
    icon: <AssignmentIcon fontSize="large" />,
    color: "#1976D2",
  },
  {
    title: "Pending",
    value: 4,
    icon: <PendingActionsIcon fontSize="large" />,
    color: "#F59E0B",
  },
  {
    title: "In Progress",
    value: 6,
    icon: <EngineeringIcon fontSize="large" />,
    color: "#8B5CF6",
  },
  {
    title: "Resolved",
    value: 5,
    icon: <CheckCircleIcon fontSize="large" />,
    color: "#10B981",
  },
];

function SummaryCards() {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {cards.map((card) => (
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          key={card.title}
        >
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #E5E7EB",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
              },
            }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    color="text.secondary"
                    fontSize={15}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    mt={1}
                  >
                    {card.value}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: card.color,
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {card.icon}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default SummaryCards;