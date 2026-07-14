import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import RoadIcon from "@mui/icons-material/AddRoad";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DeleteIcon from "@mui/icons-material/Delete";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ParkIcon from "@mui/icons-material/Park";
const departments = [
  {
    title: "Road Department",
    icon: <RoadIcon fontSize="large" color="primary" />,
  },
  {
    title: "Water Supply",
    icon: <WaterDropIcon fontSize="large" color="info" />,
  },
  {
    title: "Garbage Management",
    icon: <DeleteIcon fontSize="large" color="success" />,
  },
  {
    title: "Street Lights",
    icon: <LightbulbIcon fontSize="large" color="warning" />,
  },
  {
    title: "Electricity",
    icon: <ElectricBoltIcon fontSize="large" color="error" />,
  },
  {
    title: "Public Parks",
    icon: <ParkIcon fontSize="large" color="success" />,
  },
];
function DepartmentsSection() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">

        <Typography
          align="center"
          color="primary"
          fontWeight="bold"
        >
          DEPARTMENTS
        </Typography>

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mt={2}
          mb={7}
        >
          Departments Connected with CivicAI
        </Typography>

        <Grid container spacing={4}>
          {departments.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    backgroundColor: "#E3F2FD",
                  },
                }}
              >
                <Stack spacing={2} alignItems="center">
                  {item.icon}

                  <Typography fontWeight="bold">
                    {item.title}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default DepartmentsSection;