import {
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

const steps = [
  "Submitted",
  "Assigned",
  "In Progress",
  "Resolved",
];

function TimelineCard() {

  const activeStep = 2;

  return (
    <Paper
      elevation={3}
      sx={{
        mt: 3,
        p: 4,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={4}
      >
        Complaint Progress
      </Typography>

      <Stepper
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Typography
        mt={4}
        color="text.secondary"
      >
        Current Status :
        <strong> In Progress</strong>
      </Typography>
    </Paper>
  );
}

export default TimelineCard;