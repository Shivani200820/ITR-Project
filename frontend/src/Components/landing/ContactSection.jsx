import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
function ContactSection() {
  return (
    <Box sx={{ py: 10, bgcolor: "#F5F9FF" }}>
      <Container maxWidth="lg">

        <Typography
          align="center"
          color="primary"
          fontWeight="bold"
        >
          CONTACT US
        </Typography>

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mt={2}
          mb={7}
        >
          We'd Love to Hear From You
        </Typography>

        <Paper
          elevation={4}
          sx={{
            p: 5,
            borderRadius: 4,
          }}
        >
          <Grid container spacing={3}>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email Address"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={5}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
              >
                Send Message
              </Button>
            </Grid>

          </Grid>
        </Paper>

      </Container>
    </Box>
  );
}

export default ContactSection;