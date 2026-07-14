import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const steps = [
  {
    title: "Upload Complaint",
    icon: <CloudUploadIcon fontSize="large" color="primary" />,
  },
  {
    title: "AI Analysis",
    icon: <PsychologyIcon fontSize="large" color="secondary" />,
  },
  {
    title: "Assign Department",
    icon: <AccountBalanceIcon fontSize="large" color="success" />,
  },
  {
    title: "Officer Resolves",
    icon: <EngineeringIcon fontSize="large" color="warning" />,
  },
  {
    title: "Citizen Feedback",
    icon: <TaskAltIcon fontSize="large" color="primary" />,
  },
];

function HowItWorks() {
  return (
    <Box id="how-it-works" sx={{ py: 10 }}>
      <Container maxWidth="lg">

        <Typography
          align="center"
          color="primary"
          fontWeight="bold"
        >
          HOW CIVICAI WORKS
        </Typography>

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mt={2}
          mb={7}
        >
          Simple, Smart & AI Driven Workflow
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {steps.map((step) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              key={step.title}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {step.icon}

                <Typography
                  mt={2}
                  fontWeight="bold"
                >
                  {step.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default HowItWorks;