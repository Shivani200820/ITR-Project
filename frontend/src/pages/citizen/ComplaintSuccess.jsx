import { Container } from "@mui/material";

import SuccessCard from "../../components/citizen/success/SuccessCard";
import ComplaintSummary from "../../components/citizen/success/ComplaintSummary";
import ActionButtons from "../../components/citizen/success/ActionButtons";

function ComplaintSuccess() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <SuccessCard />
      <ComplaintSummary />
      <ActionButtons />
    </Container>
  );
}

export default ComplaintSuccess;