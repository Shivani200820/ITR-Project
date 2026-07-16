import { Container, Typography } from "@mui/material";
import ComplaintSearch from "../../components/citizen/complaints/ComplaintSearch";
import ComplaintFilters from "../../components/citizen/complaints/ComplaintFilters";
import ComplaintList from "../../components/citizen/complaints/ComplaintList";

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