import { Container, Grid, Typography } from "@mui/material";

import ComplaintImage from "../../components/officer/complaint-details/ComplaintImage";
import ComplaintInfo from "../../components/officer/complaint-details/ComplaintInfo";
import AISummaryCard from "../../components/officer/complaint-details/AISummaryCard";
import LocationCard from "../../components/officer/complaint-details/LocationCard";
import OfficerActionCard from "../../components/officer/complaint-details/OfficerActionCard";
import TimelineCard from "../../components/officer/complaint-details/TimelineCard";

function ComplaintDetails() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
      }}
    >
      {/* Page Title */}

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Complaint Details
      </Typography>

      {/* Image + Complaint Info */}

      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <ComplaintImage />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <ComplaintInfo />
        </Grid>
      </Grid>

      {/* AI Summary */}

      <Grid
        container
        spacing={3}
        mt={1}
      >
        <Grid item xs={12}>
          <AISummaryCard />
        </Grid>
      </Grid>

      {/* Map + Officer Action */}

      <Grid
        container
        spacing={3}
        mt={1}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <LocationCard />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <OfficerActionCard />
        </Grid>
      </Grid>

      {/* Timeline */}

      <Grid
        container
        spacing={3}
        mt={1}
      >
        <Grid item xs={12}>
          <TimelineCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ComplaintDetails;