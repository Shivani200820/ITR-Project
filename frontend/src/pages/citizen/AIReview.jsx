import { useState } from "react";

import {
  Container,
  Grid,
} from "@mui/material";

import AIImagePreview from "../../components/citizen/ai/AIImagePreview";
import AIConfidenceCard from "../../components/citizen/ai/AIConfidenceCard";
import AIDepartmentCard from "../../components/citizen/ai/AIDepartmentCard";
import AIPriorityBadge from "../../components/citizen/ai/AIPriorityBadge";
import AIEditableForm from "../../components/citizen/ai/AIEditableForm";
import AISubmitCard from "../../components/citizen/ai/AISubmitCard";

function AIReview() {
  const [category, setCategory] = useState("Road Damage");

  const [description, setDescription] = useState(
    "Large pothole detected by AI. This issue may cause accidents and traffic congestion."
  );

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 4 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AIImagePreview />
        </Grid>

        <Grid item xs={12} md={6}>
          <AIConfidenceCard confidence={97} />

          <div style={{ marginTop: 20 }}>
            <AIDepartmentCard
              department="Road Department"
            />
          </div>

          <div style={{ marginTop: 20 }}>
            <AIPriorityBadge
              priority="High"
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <AIEditableForm
            category={category}
            setCategory={setCategory}
            description={description}
            setDescription={setDescription}
          />
        </Grid>

        <Grid item xs={12}>
          <AISubmitCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AIReview;