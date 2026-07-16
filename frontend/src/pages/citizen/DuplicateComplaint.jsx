import {
  Container,
  Typography,
} from "@mui/material";

import DuplicateList from "../../components/citizen/duplicate/DuplicateList";

function DuplicateComplaint() {
  return (
    <Container maxWidth="lg" sx={{ py:4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Similar Complaints Found
      </Typography>

      <DuplicateList />
    </Container>
  );
}

export default DuplicateComplaint;