import { Container, Grid } from "@mui/material";

import ComplaintInfo from "../../components/citizen/complaint-details/ComplaintInfo";
import ComplaintImages from "../../components/citizen/complaint-details/ComplaintImages";
import OfficerRemarks from "../../components/citizen/complaint-details/OfficerRemarks";
import ResolutionCard from "../../components/citizen/complaint-details/ResolutionCard";

function ComplaintDetails() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <ComplaintInfo />
          <ComplaintImages />
          <OfficerRemarks />
        </Grid>

        <Grid item xs={12} md={4}>
          <ResolutionCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ComplaintDetails;