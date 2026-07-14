import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import PsychologyIcon from "@mui/icons-material/Psychology";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const features = [
  {
    title: "AI Image Detection",
    description:
      "Automatically identifies complaint category from uploaded images.",
    icon: <PsychologyIcon color="primary" fontSize="large" />,
  },
  {
    title: "GPS Tracking",
    description:
      "Captures complaint location accurately using GPS.",
    icon: <LocationOnIcon color="error" fontSize="large" />,
  },
  {
    title: "Duplicate Detection",
    description:
      "Prevents duplicate complaints by checking nearby existing reports.",
    icon: <ContentCopyIcon color="success" fontSize="large" />,
  },
  {
    title: "Smart Priority",
    description:
      "AI assigns High, Medium, or Low priority automatically.",
    icon: <PriorityHighIcon color="warning" fontSize="large" />,
  },
  {
    title: "Notifications",
    description:
      "Receive real-time complaint status updates instantly.",
    icon: <NotificationsActiveIcon color="secondary" fontSize="large" />,
  },
  {
    title: "Live Analytics",
    description:
      "Provides dashboards and reports for better decision-making.",
    icon: <AnalyticsIcon color="info" fontSize="large" />,
  },
];
function FeaturesSection() {
  return (
    <Box sx={{ py: 10, bgcolor: "#F5F9FF" }}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          color="primary"
          fontWeight="bold"
        >
          WHY CHOOSE CIVICAI
        </Typography>

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mt={2}
          mb={7}
        >
          AI Powered Smart Features
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                    bgcolor: "#E3F2FD",
                  },
                }}
              >
                <Stack spacing={2}>
                  {feature.icon}

                  <Typography variant="h6" fontWeight="bold">
                    {feature.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturesSection;