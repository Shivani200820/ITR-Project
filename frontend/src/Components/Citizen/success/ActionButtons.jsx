import {
    Stack,
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function ActionButtons() {
    const navigate = useNavigate();

    return (
        <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
        >
            <Button
                variant="contained"
                onClick={() =>
                    navigate("/citizen/my-complaints")
                }
            >
                My Complaints
            </Button>

            <Button
                variant="outlined"
                onClick={() =>
                    navigate("/citizen/dashboard")
                }
            >
                Dashboard
            </Button>
            const navigate = useNavigate();

            <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={() => navigate("/citizen/complaint-success")}
            >
                Submit Complaint
            </Button>
        </Stack>
    );
}

export default ActionButtons;