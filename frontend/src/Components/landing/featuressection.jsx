import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TimelineIcon from "@mui/icons-material/Timeline";
import MicIcon from "@mui/icons-material/Mic";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const features = [
  {
    title: "AI Detection",
    description: "Identifies issues instantly from uploaded images and reports.",
    icon: <AutoAwesomeIcon color="primary" fontSize="large" />,
  },
  {
    title: "Smart Complaint",
    description: "Organizes complaints intelligently for faster review and resolution.",
    icon: <SmartToyIcon color="secondary" fontSize="large" />,
  },
  {
    title: "Live Tracking",
    description: "Follows complaint progress in real time from submission to closure.",
    icon: <TimelineIcon color="info" fontSize="large" />,
  },
  {
    title: "Voice Complaint",
    description: "Allows citizens to report issues quickly using voice input.",
    icon: <MicIcon color="success" fontSize="large" />,
  },
  {
    title: "GPS Location",
    description: "Captures precise geographic details for faster field response.",
    icon: <LocationOnIcon color="error" fontSize="large" />,
  },
  {
    title: "Notifications",
    description: "Sends timely updates so users stay informed at every step.",
    icon: <NotificationsActiveIcon color="warning" fontSize="large" />,
  },
];

function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <Typography
            variant="overline"
            display="block"
            color="primary"
            fontWeight={700}
            letterSpacing={3}
          >
            Features
          </Typography>
          <Typography variant="h3" fontWeight={700} className="mt-3 text-slate-900">
            Built to make civic complaint handling smarter
          </Typography>
          <Typography variant="body1" color="text.secondary" className="mx-auto mt-4 max-w-2xl">
            From AI-powered analysis to live updates, every feature is designed to simplify reporting and improve service delivery.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="h-full rounded-2xl border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="h-full p-6">
                <Stack spacing={2}>
                  <Box className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={700}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;