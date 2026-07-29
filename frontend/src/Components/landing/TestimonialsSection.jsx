import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Patil",
    city: "Pune",
    rating: 5,
    review:
      "Reporting road damage took less than a minute. The complaint was resolved quickly and I received regular updates.",
  },
  {
    name: "Sneha Joshi",
    city: "Mumbai",
    rating: 5,
    review:
      "The AI automatically selected the correct department. The interface is simple and very easy to use.",
  },
  {
    name: "Amit Sharma",
    city: "Nagpur",
    rating: 5,
    review:
      "Live tracking and notifications kept me informed until my complaint was resolved. Excellent experience.",
  },
];

function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: 10,
        background: "#F8FBFF",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mb={2}
        >
          What Citizens Say
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={6}
        >
          Trusted by citizens for fast, transparent and AI-powered
          complaint resolution.
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((item, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
            >
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    p: 2,
                  }}
                >
                  <CardContent>
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        mb: 2,
                        bgcolor: "primary.main",
                        fontSize: 28,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name.charAt(0)}
                    </Avatar>

                    <Rating
                      value={item.rating}
                      readOnly
                      sx={{ mb: 2 }}
                    />

                    <Typography
                      color="text.secondary"
                      sx={{
                        minHeight: 120,
                        lineHeight: 1.8,
                      }}
                    >
                      "{item.review}"
                    </Typography>

                    <Box mt={3}>
                      <Typography
                        fontWeight="bold"
                        variant="h6"
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        color="text.secondary"
                      >
                        {item.city}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default TestimonialsSection;