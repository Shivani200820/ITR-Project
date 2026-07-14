import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
const stats = [
  {
    value: "1200+",
    label: "Complaints Solved",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
  {
    value: "50+",
    label: "Departments",
  },
  {
    value: "24x7",
    label: "Citizen Support",
  },
];
function StatisticsSection() {
  return (
    <Box
      sx={{
        py: 10,
        background:
          "linear-gradient(135deg,#1565C0,#42A5F5)",
      }}
    >
      <Container maxWidth="lg">

        <Typography
          align="center"
          color="white"
          fontWeight="bold"
        >
          OUR IMPACT
        </Typography>

        <Typography
          variant="h3"
          align="center"
          color="white"
          fontWeight="bold"
          mt={2}
          mb={7}
        >
          Trusted by Citizens
        </Typography>

        <Grid container spacing={4}>
          {stats.map((item) => (
            <Grid item xs={6} md={3} key={item.label}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  color="primary"
                  fontWeight="bold"
                >
                  {item.value}
                </Typography>

                <Typography mt={2}>
                  {item.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default StatisticsSection;