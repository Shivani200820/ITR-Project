import {
  Container,
  Typography
} from "@mui/material";

import ComplaintMapView from "../../components/citizen/map/ComplaintMapView";

function ComplaintMap() {
  return (
    <Container
      maxWidth="xl"
      sx={{ py: 4 }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Complaint Map
      </Typography>

      <ComplaintMapView />
    </Container>
  );
}

export default ComplaintMap;