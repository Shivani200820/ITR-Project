import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import GroupsIcon from "@mui/icons-material/Groups";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const stats = [
  {
    icon: <AssignmentTurnedInIcon sx={{ fontSize: 42 }} />,
    number: "1200+",
    title: "Complaints Solved",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 42 }} />,
    number: "98%",
    title: "AI Accuracy",
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 42 }} />,
    number: "50+",
    title: "Departments",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 42 }} />,
    number: "24x7",
    title: "Citizen Support",
  },
];

function StatsCounter() {
  return (
    <Box
      sx={{
        py: 10,
        background:
          "linear-gradient(180deg,#F7FAFF 0%,#FFFFFF 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mb={2}
        >
          Our Impact
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={6}
        >
          Trusted by thousands of citizens and government
          departments across smart cities.
        </Typography>

        <Grid container spacing={4}>
          {stats.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 5,
                    height: "100%",
                    transition: "0.3s",

                    "&:hover": {
                      boxShadow:
                        "0 20px 40px rgba(21,101,192,.18)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 3,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,#1565C0,#00ACC1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h3"
                    color="primary"
                    fontWeight="bold"
                  >
                    {item.number}
                  </Typography>

                  <Typography
                    mt={1}
                    color="text.secondary"
                  >
                    {item.title}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default StatsCounter;