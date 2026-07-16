import {
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

const steps = [
  "Pending",
  "Accepted",
  "In Progress",
  "Resolved",
  "Closed",
];

function StatusTimeline() {

  const activeStep = 2;

  return (

    <Paper
    sx={{
      p:3,
      mt:3,
    }}
    >

      <Typography
      variant="h6"
      mb={3}
      >
        Complaint Progress
      </Typography>

      <Stepper
      activeStep={activeStep}
      alternativeLabel
      >

        {steps.map((label)=>(
          <Step key={label}>
            <StepLabel>
              {label}
            </StepLabel>
          </Step>
        ))}

      </Stepper>

    </Paper>

  );
}

export default StatusTimeline;