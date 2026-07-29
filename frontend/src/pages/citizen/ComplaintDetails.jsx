import {
  Container,
  Grid,
} from "@mui/material";

import ComplaintInfo from "../../components/citizen/complaint-details/ComplaintInfo";
import ComplaintImages from "../../components/citizen/complaint-details/ComplaintImages";
import OfficerRemarks from "../../components/citizen/complaint-details/OfficerRemarks";
import ResolutionCard from "../../components/citizen/complaint-details/ResolutionCard";
import ComplaintMap from "../../components/citizen/complaint-details/ComplaintMap";
import StatusTimeline from "../../components/citizen/complaint-details/StatusTimeline";

import ComplaintImage from "../../components/citizen/complaint/ComplaintImage";
import ComplaintTimeline from "../../components/citizen/complaint/ComplaintTimeline";
import ComplaintLocation from "../../components/citizen/complaint/ComplaintLocation";


function ComplaintDetails() {
  return (
    <Container
      maxWidth="xl"
      sx={{ py: 4 }}
    >

      <Grid container spacing={3}>


        {/* Left Section */}
        <Grid item xs={12} md={8}>


          <ComplaintInfo />


          <ComplaintImages />


          <ComplaintImage />


          <ComplaintMap />


          <ComplaintLocation />


          <StatusTimeline />


          <ComplaintTimeline />


          <OfficerRemarks />


        </Grid>



        {/* Right Section */}
        <Grid item xs={12} md={4}>


          <ResolutionCard />


        </Grid>


      </Grid>

    </Container>
  );
}


export default ComplaintDetails;