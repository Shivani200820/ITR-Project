import { Box, Typography, Avatar } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";

    function AuthHeader({ role }) {
        return (
            <Box textAlign="center" mb={4}>
                <Avatar
                    sx={{
                        width: 70,
                        height: 70,
                        bgcolor: "primary.main",
                        margin: "auto",
                        mb: 2,
                    }}
                >
                    <SecurityIcon sx={{ fontSize: 40 }} />
                </Avatar>

                <Typography color="text.secondary">
                    Login as {role}
                </Typography>

                <Typography color="text.secondary" mt={1}>
                    Sign in to continue to CivicAI
                </Typography>
            </Box>
        );
    }

    export default AuthHeader;