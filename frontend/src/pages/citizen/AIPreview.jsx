import { useState } from "react";

import {
  Container,
  Typography,
  Grid,
} from "@mui/material";

import { useLocation } from "react-router-dom";

import PreviewImage from "../../components/citizen/ai/PreviewImage";
import AIAnalysisCard from "../../components/citizen/ai/AIAnalysisCard";
import SubmitComplaint from "../../components/citizen/ai/SubmitComplaint";

import AIImagePreview from "../../components/citizen/ai/AIImagePreview";
import AIAnalyzeButton from "../../components/citizen/ai/AIAnalyzeButton";
import AILoading from "../../components/citizen/ai/AILoading";
import AIResultCard from "../../components/citizen/ai/AIResultCard";

function AIPreview() {
  const { state } = useLocation();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeImage = () => {
    setLoading(true);

    setTimeout(() => {
      setResult({
        category: "Road Damage",
        department: "Road Department",
        priority: "High",
        description:
          "AI detected a large pothole causing traffic issues.",
      });

      setLoading(false);
    }, 2500);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 4 }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        AI Analysis Preview
      </Typography>

      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid item xs={12} md={5}>
          <PreviewImage />

          {/* Optional New Preview */}
          <AIImagePreview />
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={7}>
          {/* Data from Complaint Form */}
          <AIAnalysisCard data={state} />

          {/* Analyze Button */}
          <AIAnalyzeButton onAnalyze={analyzeImage} />

          {/* Loading */}
          {loading && <AILoading />}

          {/* AI Result */}
          {!loading && result && (
            <AIResultCard result={result} />
          )}

          {/* Submit Complaint */}
          <SubmitComplaint />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AIPreview;