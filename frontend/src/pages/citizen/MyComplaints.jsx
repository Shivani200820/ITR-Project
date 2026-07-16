import { Container, Typography } from "@mui/material";
import ComplaintSearch from "../../components/citizen/complaint/ComplaintSearch";
import ComplaintFilters from "../../components/citizen/complaint/ComplaintFilters";
import ComplaintList from "../../components/citizen/complaint/ComplaintList";
function MyComplaints() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        My Complaints
      </Typography>

      <ComplaintSearch />
      <ComplaintFilters />
      <ComplaintList />
    </Container>
  );
}

export default MyComplaints;