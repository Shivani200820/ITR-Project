import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PublicIcon from "@mui/icons-material/Public";

const overviewData = [
  {
    title: "Current Problem",
    icon: <ReportProblemIcon color="error" />,
    description:
      "Citizens often struggle with slow complaint registration, unclear departments, and lack of complaint tracking.",
  },
  {
    title: "AI Powered Solution",
    icon: <PsychologyIcon color="primary" />,
    description:
      "CivicAI uses AI to identify complaint categories, assign departments, prioritize urgency, and simplify the reporting process.",
  },
  {
    title: "Smart City Benefits",
    icon: <PublicIcon color="success" />,
    description:
      "Improves transparency, accelerates complaint resolution, and strengthens collaboration between citizens and government.",
  },
];

function OverviewSection() {
  return (
    <Box sx={{ py: 10, bgcolor: "#fafafa" }}>
      <Container maxWidth="lg">

        <Typography
          color="primary"
          fontWeight="bold"
          align="center"
        >
          PROJECT OVERVIEW
        </Typography>

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mt={2}
        >
          Building Smarter Cities with Artificial Intelligence
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mt={3}
          mb={7}
        >
          CivicAI helps citizens report civic issues quickly while enabling
          government departments to respond efficiently through AI-powered
          automation.
        </Typography>

        <Grid container spacing={4}>

          {overviewData.map((item) => (

            <Grid item xs={12} md={4} key={item.title}>

              <Paper
                elevation={4}
                sx={{
                  p:4,
                  borderRadius:4,
                  height:"100%",
                  transition:"0.3s",
                  "&:hover":{
                    transform:"translateY(-10px)"
                  }
                }}
              >

                <Stack spacing={2}>

                  {item.icon}

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.description}
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

export default OverviewSection;