import {
  Paper,
  Typography,
} from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

function ComplaintTimeline() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
      >
        Complaint Progress
      </Typography>

      <Timeline>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            Complaint Submitted
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            AI Analysis Completed
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            Assigned to Department
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            Officer Working
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>

          <TimelineContent>
            Complaint Resolved
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Paper>
  );
}

export default ComplaintTimeline;