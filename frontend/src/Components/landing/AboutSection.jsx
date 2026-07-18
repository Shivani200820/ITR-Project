import { Box, Typography, Button } from "@mui/material";

function AboutSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-center md:gap-16 lg:px-8">
        <Box className="relative w-full overflow-hidden rounded-[28px] bg-white shadow-[0_20px_80px_rgba(21,101,192,0.08)] md:w-1/2">
          <div className="aspect-[4/3] bg-slate-200 p-8">
            <div className="flex h-full items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-slate-100">
              <Typography
                variant="subtitle1"
                sx={{ color: "#64748b" }}
              >
                Image Placeholder
              </Typography>
            </div>
          </div>
        </Box>

        <div className="w-full md:w-1/2">
          <Typography
            variant="overline"
            sx={{ color: "#00ACC1", letterSpacing: 2, fontWeight: 700 }}
            className="mb-4 uppercase"
          >
            About CivicAI
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "#0f172a" }}
            className="mb-6 leading-tight"
          >
            AI-powered civic complaint registration for smarter cities.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#475569", lineHeight: 1.8 }}
            className="mb-6 max-w-xl"
          >
            CivicAI simplifies complaint registration for citizens while empowering government
            authorities with intelligent issue triage, department assignment, and status tracking.
            Upload an image, share location, and let AI classify the problem, assign priority,
            and generate a clear resolution path.
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#64748b", lineHeight: 1.8 }}
            className="mb-6 max-w-xl"
          >
            The platform is built to improve transparency, reduce manual effort, and keep every
            civic issue visible from report through resolution. Citizens, officers, and
            administrators all benefit from an intuitive, modern experience.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1565C0",
              borderRadius: 10,
              padding: "12px 26px",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0 18px 50px rgba(21, 101, 192, 0.18)",
              '&:hover': {
                backgroundColor: "#0d47a1",
              },
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
