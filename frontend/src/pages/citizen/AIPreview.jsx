import {
  Container,
  Typography,
  Grid,
} from "@mui/material";

import PreviewImage from "../../components/citizen/ai/PreviewImage";
import AIAnalysisCard from "../../components/citizen/ai/AIAnalysisCard";
import SubmitComplaint from "../../components/citizen/ai/SubmitComplaint";

function AIPreview() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        AI Analysis Preview
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <PreviewImage />
        </Grid>

        <Grid item xs={12} md={7}>
          <AIAnalysisCard />
          <SubmitComplaint />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AIPreview;