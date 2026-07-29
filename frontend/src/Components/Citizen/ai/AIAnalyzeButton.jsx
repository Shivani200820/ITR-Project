import { Button } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";

function AIAnalyzeButton({ onAnalyze }) {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<PsychologyIcon />}
      onClick={onAnalyze}
      fullWidth
    >
      Analyze with AI
    </Button>
  );
}

export default AIAnalyzeButton;