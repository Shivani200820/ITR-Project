import {
  Grid,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={2}
      mb={4}
    >
      <Grid item>
        <Button
          variant="contained"
          onClick={() =>
            navigate("/citizen/register-complaint")
          }
        >
          Register Complaint
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="outlined"
          onClick={() =>
            navigate("/citizen/my-complaints")
          }
        >
          My Complaints
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="outlined"
          onClick={() =>
            navigate("/citizen/profile")
          }
        >
          Profile
        </Button>
      </Grid>
    </Grid>
  );
}

export default QuickActions;