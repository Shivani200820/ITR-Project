import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from "@mui/icons-material/Help";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I register a complaint?",
    answer:
      "Click on 'Register Complaint', upload an image, allow GPS access, and submit your complaint. AI will automatically detect the category.",
  },
  {
    question: "Can I track my complaint?",
    answer:
      "Yes. Every complaint receives a unique ID and you can track its status in real time.",
  },
  {
    question: "Is GPS location mandatory?",
    answer:
      "GPS is recommended because it helps officers find the exact location faster.",
  },
  {
    question: "Can I upload multiple images?",
    answer:
      "Currently one image is supported. Multiple image support can be added in future versions.",
  },
  {
    question: "How does AI identify the complaint?",
    answer:
      "AI analyzes the uploaded image and predicts the complaint category, department and priority automatically.",
  },
];

function FAQSection() {
  return (
    <Box
      sx={{
        py: 10,
        background: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mb={2}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={6}
        >
          Everything you need to know about CivicAI.
        </Typography>

        {faqs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion
              sx={{
                mb: 2,
                borderRadius: 3,
                overflow: "hidden",
                "&:before": {
                  display: "none",
                },
                boxShadow:
                  "0 8px 20px rgba(15,23,42,0.08)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <HelpIcon
                  color="primary"
                  sx={{ mr: 2 }}
                />

                <Typography fontWeight={600}>
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography color="text.secondary">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}

export default FAQSection;